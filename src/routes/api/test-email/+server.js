import { json } from '@sveltejs/kit';
import { PRIVATE_EMAIL_USER, PRIVATE_EMAIL_PASS, PRIVATE_EMAIL_FROM } from '$env/static/private';
import nodemailer from 'nodemailer';

// Simple GET endpoint to verify routing
export async function GET() {
    console.log('Testing SMTP connection...');

    try {
        // Create transporter
        const transporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465,
            secure: true,
            auth: {
                user: PRIVATE_EMAIL_USER,
                pass: PRIVATE_EMAIL_PASS
            }
        });

        // Verify connection
        const verifyResult = await transporter.verify();
        console.log('SMTP Verification result:', verifyResult);

        // Try to send a test email
        const testMailResult = await transporter.sendMail({
            from: PRIVATE_EMAIL_FROM,
            to: PRIVATE_EMAIL_USER, // Send to yourself as a test
            subject: 'SMTP Test',
            text: 'If you receive this email, SMTP is working correctly.',
            html: '<h1>SMTP Test</h1><p>If you receive this email, SMTP is working correctly.</p>'
        });

        return json({
            status: 'success',
            message: 'SMTP connection successful',
            smtpVerification: verifyResult,
            testMailResult: {
                messageId: testMailResult.messageId,
                response: testMailResult.response
            }
        });

    } catch (error) {
        console.error('SMTP Test Error:', error);
        return json({
            status: 'error',
            message: 'SMTP test failed',
            error: {
                name: error.name,
                message: error.message,
                code: error.code
            }
        }, { status: 500 });
    }
} 