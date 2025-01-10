import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { PRIVATE_EMAIL_USER, PRIVATE_EMAIL_PASS, PRIVATE_EMAIL_FROM } from '$env/static/private';

// Add debug logging
console.log('Email configuration:', {
  user: PRIVATE_EMAIL_USER,
  from: PRIVATE_EMAIL_FROM,
  // Don't log the actual password
  hasPassword: !!PRIVATE_EMAIL_PASS
});

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: PRIVATE_EMAIL_USER,
    pass: PRIVATE_EMAIL_PASS
  },
  debug: true, // Enable debug logging
  logger: true  // Enable logger
});

// Test the connection immediately
try {
  transporter.verify(function(error, success) {
    if (error) {
      console.error('SMTP Verification Error:', error);
    } else {
      console.log('SMTP Connection Success:', success);
    }
  });
} catch (error) {
  console.error('SMTP Setup Error:', error);
}

const verificationCodes = new Map();

export async function POST({ request }) {
  console.log('Received verification request');
  
  try {
    const { email, code } = await request.json();
    
    console.log('Request data:', { email, hasCode: !!code });

    if (!email || !code) {
      console.error('Validation Error: Missing email or code');
      return json({ 
        error: 'Missing required fields',
        details: { email: !email, code: !code }
      }, { status: 400 });
    }

    // Store code before attempting to send email
    verificationCodes.set(email, {
      code,
      timestamp: Date.now()
    });

    console.log('Preparing to send email');

    const mailOptions = {
      from: {
        name: 'IpsePay',
        address: PRIVATE_EMAIL_FROM
      },
      to: email,
      subject: 'IpsePay - Verify Your Email',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
          </head>
          <body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
            <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
              <div style="background: white; border-radius: 24px; padding: 48px 40px; box-shadow: 0 4px 24px -1px rgba(0, 0, 0, 0.08);
                          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                <!-- Modern Brand Header -->
                <div style="text-align: center; margin-bottom: 40px;">
                  <div style="display: inline-flex; flex-direction: column; align-items: center;">
                    <div style="position: relative; padding: 20px 32px; overflow: hidden;">
                      <!-- Main Title -->
                      <h1 style="margin: 0; font-size: 36px; font-weight: 900; color: #605bff;
                                 position: relative; z-index: 2; letter-spacing: -1px;
                                 font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                        IPSEPAY
                      </h1>
                      
                      <!-- Decorative Background Elements -->
                      <div style="position: absolute; top: 50%; left: 0; right: 0; height: 2px; 
                                  background: linear-gradient(to right, 
                                    rgba(96, 91, 255, 0), 
                                    rgba(96, 91, 255, 0.2), 
                                    rgba(96, 91, 255, 0)
                                  ); 
                                  transform: translateY(-50%);"></div>
                      
                      <!-- Subtitle Container -->
                      <div style="margin-top: 12px; position: relative; z-index: 2;">
                        <div style="display: inline-flex; align-items: center; gap: 10px;
                                    padding: 6px 12px; border-radius: 100px;
                                    background: rgba(96, 91, 255, 0.05);
                                    border: 1px solid rgba(96, 91, 255, 0.1);">
                          <span style="width: 3px; height: 3px; background: #605bff; border-radius: 50%;"></span>
                          <span style="color: #605bff; font-size: 11px; font-weight: 600; 
                                       letter-spacing: 1.5px; text-transform: uppercase;">
                            Secure Payments
                          </span>
                          <span style="width: 3px; height: 3px; background: #605bff; border-radius: 50%;"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Modern Divider -->
                <div style="height: 2px; background: linear-gradient(to right, rgba(96, 91, 255, 0.1), rgba(139, 122, 255, 0.1)); 
                            border-radius: 2px; margin-bottom: 40px;"></div>
                
                <!-- Enhanced Content -->
                <div style="text-align: center;">
                  <h1 style="color: #32325d; font-size: 28px; font-weight: 700; margin-bottom: 16px; letter-spacing: -0.5px;">
                    Verify your email address
                  </h1>
                  <p style="color: #32325d; opacity: 0.8; font-size: 16px; line-height: 1.6; margin-bottom: 40px;">
                    Thanks for signing up for IpsePay! Please use the verification code below to complete your registration.
                  </p>
                  
                  <!-- Modern Verification Code Box -->
                  <div style="background: linear-gradient(135deg, rgba(96, 91, 255, 0.03), rgba(139, 122, 255, 0.03));
                              border: 1px solid rgba(96, 91, 255, 0.08); border-radius: 16px; 
                              padding: 32px; margin-bottom: 40px; backdrop-filter: blur(8px);">
                    <div style="color: #605bff; font-size: 40px; font-weight: 700; letter-spacing: 8px; margin: 0;">
                      ${code}
                    </div>
                    <div style="color: #32325d; opacity: 0.7; font-size: 14px; margin-top: 16px; font-weight: 500;">
                      Code expires in 3 minutes
                    </div>
                  </div>
                  
                  <!-- Enhanced Security Notice -->
                  <div style="background: #fffbeb; border: 1px solid rgba(251, 146, 60, 0.1); 
                              border-radius: 12px; padding: 16px; margin-bottom: 40px;">
                    <p style="color: #32325d; font-size: 14px; margin: 0; display: flex; align-items: center; 
                              justify-content: center; gap: 8px;">
                      <span style="font-size: 16px;">�</span>
                      <strong>Security Notice:</strong> If you didn't request this code, please ignore this email.
                    </p>
                  </div>

                  <!-- Modern Help Text -->
                  <p style="color: #32325d; opacity: 0.8; font-size: 14px; margin-bottom: 40px; line-height: 1.6;">
                    Need help? Contact our support team at 
                    <a href="mailto:support@ipsepay.com" 
                       style="color: #605bff; text-decoration: none; font-weight: 600; 
                              border-bottom: 1px solid rgba(96, 91, 255, 0.2);">
                      support@ipsepay.com
                    </a>
                  </p>
                </div>
                
                <!-- Modern Footer -->
                <div style="text-align: center; border-top: 1px solid rgba(229, 231, 235, 0.5); 
                            padding-top: 32px; margin-top: 32px;">
                  <p style="color: #9ca3af; font-size: 14px; margin: 4px 0; font-weight: 500;">
                    © ${new Date().getFullYear()} IpsePay. All rights reserved.
                  </p>
                  <div style="margin-top: 16px; display: flex; justify-content: center; gap: 16px;">
                    <a href="https://ipsepay.com/terms" 
                       style="color: #605bff; text-decoration: none; font-size: 14px; font-weight: 500;">Terms</a>
                    <span style="color: #e5e7eb;">•</span>
                    <a href="https://ipsepay.com/privacy" 
                       style="color: #605bff; text-decoration: none; font-size: 14px; font-weight: 500;">Privacy</a>
                    <span style="color: #e5e7eb;">•</span>
                    <a href="https://ipsepay.com/contact" 
                       style="color: #605bff; text-decoration: none; font-size: 14px; font-weight: 500;">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `
    };

    console.log('Attempting to send email');

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      return json({ success: true, messageId: info.messageId });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      throw new Error(`Email sending failed: ${emailError.message}`);
    }

  } catch (error) {
    console.error('Server error:', error);
    return json({ 
      error: 'Failed to send verification code',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
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
      console.log('No verification code found for:', email);
      return json(
        { error: 'No verification code found. Please request a new code.' },
        { status: 400 }
      );
    }

    // Check if code is expired (3 minutes)
    if (Date.now() - storedData.timestamp > 180000) {
      console.log('Code expired for:', email);
      verificationCodes.delete(email);
      return json(
        { error: 'Verification code has expired. Please request a new code.' },
        { status: 400 }
      );
    }

    // Verify code
    if (storedData.code !== code) {
      console.log('Invalid code provided for:', email);
      return json(
        { error: 'Invalid verification code. Please try again.' },
        { status: 400 }
      );
    }

    // Clear the code after successful verification
    verificationCodes.delete(email);
    console.log('Code verified successfully for:', email);

    return json({ 
      success: true,
      message: 'Email verified successfully'
    });
  } catch (error) {
    console.error('Verification error:', error);
    return json(
      { error: 'Verification failed. Please try again.' },
      { status: 500 }
    );
  }
} 