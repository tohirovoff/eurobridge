import { NextRequest, NextResponse } from 'next/server';
import { validateContactForm, ContactFormData } from '@/lib/schemas';

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Validate form data
    const { valid, errors } = validateContactForm(body);
    if (!valid) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    // Send to Telegram if configured
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN || '8640308416:AAHT81sBFpT4osyY1Ht6cmlQvwIMdqPN2X4';
    // Telegram'da yozish uchun chat_id kiritilishi shart (masalan: o'zingizning profilingiz yoki gruppangiz id'si)
    const telegramChatId = process.env.TELEGRAM_CHAT_ID || '800955323';

    if (telegramBotToken && telegramChatId) {
      const message = `
🌍 Veb-saytdan yangi ariza tushdi!

👤 Ismi: ${body.name}
📞 Telefon raqami: ${body.phone}
✈️ Viza turi: ${body.visaType}

💬 Qo'shimcha xabar:
${body.message}

---
Yuborilgan vaqti: ${new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}
      `.trim();

      // Bir nechta ID'larni ajratib olamiz
      const chatIds = telegramChatId.split(',').map((id) => id.trim()).filter(Boolean);

      await Promise.all(
        chatIds.map(async (chatId) => {
          try {
            const telegramResponse = await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML',
              }),
            });

            if (!telegramResponse.ok) {
              console.error(`Telegram API error for chat ${chatId}:`, await telegramResponse.text());
            }
          } catch (error) {
            console.error(`Error sending Telegram message to ${chatId}:`, error);
            // Qolganlariga jo'natish xalaqit qilmasligi uchun try...catch sikl ichida
          }
        })
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you for your submission. We will contact you soon.',
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
