import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { PRIVATE_EMAIL_USER, PRIVATE_EMAIL_PASS, PRIVATE_EMAIL_FROM } from '$env/static/private';

// First, let's test the environment variables
console.log('Email Configuration Check:', {
  hasUser: !!PRIVATE_EMAIL_USER,
  hasPass: !!PRIVATE_EMAIL_PASS,
  hasFrom: !!PRIVATE_EMAIL_FROM,
  userEmail: PRIVATE_EMAIL_USER, // Log the actual email for verification
});

// Add more detailed logging
console.log('Email Configuration:', {
    user: PRIVATE_EMAIL_USER,
    from: PRIVATE_EMAIL_FROM,
    hasPassword: !!PRIVATE_EMAIL_PASS
});

// Create transporter with the working configuration
const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
        user: PRIVATE_EMAIL_USER,
        pass: PRIVATE_EMAIL_PASS
    }
});

// Store verification codes in memory
const verificationCodes = new Map();

export async function POST({ request }) {
    try {
        const { email, code } = await request.json();
        console.log('Sending verification code to:', email);

        // Store the code with timestamp
        verificationCodes.set(email, {
            code,
            timestamp: Date.now()
        });

        const mailOptions = {
            from: PRIVATE_EMAIL_FROM,
            to: email,
            subject: 'Verify Your IpsePay Account',
            html: `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your IpsePay Account</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f5;">
    <table role="presentation" style="width: 100%; border: none; border-spacing: 0; background-color: #f4f4f5; padding: 40px 0;">
        <tr>
            <td align="center" style="padding: 0;">
                <table role="presentation" style="width: 600px; border: none; border-spacing: 0; text-align: left; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    <!-- Modern Header -->
                    <tr>
                        <td style="padding: 0;">
                            <div style="background: linear-gradient(135deg, #605bff 0%, #8b7aff 100%); padding: 40px 40px; text-align: center;">
                                <h1 style="margin: 0; font-size: 32px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">
                                    IPSE<span style="font-weight: 300;">PAY</span>
                                </h1>
                            </div>
                        </td>
                    </tr>
                    
                    <!-- Main Content -->
                    <tr>
                        <td style="padding: 48px 40px;">
                            <table role="presentation" style="width: 100%; border: none; border-spacing: 0;">
                                <tr>
                                    <td>
                                        <h2 style="margin: 0 0 24px; font-size: 24px; font-weight: 700; color: #1f2937; letter-spacing: -0.5px;">
                                            Verify your email address
                                        </h2>
                                        
                                        <p style="margin: 0 0 32px; font-size: 16px; line-height: 24px; color: #4b5563;">
                                            Welcome to IpsePay! Use this verification code to complete your registration and secure your account.
                                        </p>

                                        <!-- Modern Verification Code Box -->
                                        <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 16px; padding: 32px; margin: 32px 0; text-align: center; border: 1px solid #e2e8f0;">
                                            <p style="margin: 0 0 16px; font-size: 14px; color: #64748b; text-transform: uppercase; letter-spacing: 1px;">
                                                Your verification code
                                            </p>
                                            <div style="font-size: 36px; font-weight: 700; letter-spacing: 8px; color: #605bff; font-family: monospace; background: -webkit-linear-gradient(45deg, #605bff, #8b7aff); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                                                ${code}
                                            </div>
                                            <p style="margin: 16px 0 0; font-size: 14px; color: #94a3b8;">
                                                Expires in 3 minutes
                                            </p>
                                        </div>

                                        <!-- Security Notice -->
                                        <div style="padding: 24px; background-color: #eff6ff; border-radius: 12px; margin-top: 32px;">
                                            <p style="margin: 0; font-size: 14px; line-height: 20px; color: #3b82f6;">
                                                🔒 For your security, never share this code with anyone. IpsePay representatives will never ask for your verification code.
                                            </p>
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Modern Footer -->
                    <tr>
                        <td style="padding: 32px 40px; background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);">
                            <table role="presentation" style="width: 100%; border: none; border-spacing: 0;">
                                <tr>
                                    <td style="padding: 0; text-align: center;">
                                        <p style="margin: 0 0 16px; font-size: 14px; color: #64748b;">
                                            © ${new Date().getFullYear()} IpsePay. All rights reserved.
                                        </p>
                                        <div style="margin: 0 0 24px;">
                                            <a href="https://ipsepay.com/privacy" style="color: #605bff; text-decoration: none; font-size: 14px; margin: 0 12px;">Privacy</a>
                                            <span style="color: #cbd5e1;">•</span>
                                            <a href="https://ipsepay.com/terms" style="color: #605bff; text-decoration: none; font-size: 14px; margin: 0 12px;">Terms</a>
                                            <span style="color: #cbd5e1;">•</span>
                                            <a href="https://ipsepay.com/contact" style="color: #605bff; text-decoration: none; font-size: 14px; margin: 0 12px;">Support</a>
                                        </div>
                                        <p style="margin: 0; font-size: 12px; color: #94a3b8; line-height: 18px;">
                                            This is an automated message. Please do not reply to this email.<br>
                                            IpsePay Inc. • Baghdad, Iraq
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
            `
        };

        const result = await transporter.sendMail(mailOptions);
        console.log('Verification email sent:', result.messageId);

        return json({
            success: true,
            messageId: result.messageId,
            message: 'Verification code sent successfully'
        });

    } catch (error) {
        console.error('Failed to send verification email:', error);
        return json({
            success: false,
            error: 'Failed to send verification code',
            details: error.message
        }, { status: 500 });
    }
}

// Verification endpoint
export async function PUT({ request }) {
    try {
        const { email, code } = await request.json();
        console.log('Verifying code for:', email);

        const storedData = verificationCodes.get(email);
        
        if (!storedData) {
            return json({ 
                success: false,
                error: 'No verification code found. Please request a new code.' 
            }, { status: 400 });
        }

        // Check if code is expired (3 minutes)
        if (Date.now() - storedData.timestamp > 180000) {
            verificationCodes.delete(email);
            return json({ 
                success: false,
                error: 'Verification code has expired. Please request a new code.' 
            }, { status: 400 });
        }

        // Verify code
        if (storedData.code !== code) {
            return json({ 
                success: false,
                error: 'Invalid verification code.' 
            }, { status: 400 });
        }

        // Code is valid - remove it from storage
        verificationCodes.delete(email);

        return json({
            success: true,
            message: 'Email verified successfully'
        });

    } catch (error) {
        console.error('Verification error:', error);
        return json({
            success: false,
            error: 'Verification failed',
            details: error.message
        }, { status: 500 });
    }
}

// Add this test function
async function testZohoConnection() {
    try {
        console.log('Testing Zoho Mail configuration...');
        console.log('Email User:', PRIVATE_EMAIL_USER);
        console.log('Email From:', PRIVATE_EMAIL_FROM);
        console.log('Password exists:', !!PRIVATE_EMAIL_PASS);

        const testTransporter = nodemailer.createTransport({
            host: 'smtp.zoho.com',
            port: 465,
            secure: true,
            auth: {
                user: PRIVATE_EMAIL_USER,
                pass: PRIVATE_EMAIL_PASS
            },
            debug: true // Enable debug logging
        });

        console.log('Testing SMTP connection...');
        const verifyResult = await testTransporter.verify();
        console.log('SMTP Verification result:', verifyResult);
        
        return {
            success: true,
            message: 'Zoho Mail configuration is valid'
        };
    } catch (error) {
        console.error('Zoho Mail configuration error:', {
            name: error.name,
            message: error.message,
            code: error.code,
            command: error.command
        });
        return {
            success: false,
            error: error.message,
            details: {
                name: error.name,
                code: error.code,
                command: error.command
            }
        };
    }
}

// Try this alternative configuration if the current one isn't working
const alternativeTransporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 587,
    secure: false, // Try false for TLS
    auth: {
        user: PRIVATE_EMAIL_USER,
        pass: PRIVATE_EMAIL_PASS
    },
    tls: {
        rejectUnauthorized: false // Only use this in development
    }
});

// Test both configurations
async function testBothConfigurations() {
    try {
        console.log('Testing SSL configuration (port 465)...');
        const sslResult = await testZohoConnection();
        console.log('SSL test result:', sslResult);

        console.log('Testing TLS configuration (port 587)...');
        const tlsResult = await alternativeTransporter.verify();
        console.log('TLS test result:', tlsResult);

        return {
            ssl: sslResult,
            tls: tlsResult
        };
    } catch (error) {
        console.error('Configuration test error:', error);
        return {
            error: error.message,
            details: {
                name: error.name,
                code: error.code
            }
        };
    }
}

// Update the GET endpoint to test both configurations
export async function GET() {
    const testResults = await testBothConfigurations();
    return json(testResults);
} 