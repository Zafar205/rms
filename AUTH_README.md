# Next.js Appwrite Authentication

A complete authentication system built with Next.js and Appwrite, featuring email/password authentication, user registration, and password recovery.

## Features

- ✅ User Registration
- ✅ User Login
- ✅ User Logout
- ✅ Password Recovery/Reset
- ✅ User Profile Display
- ✅ Protected Routes
- ✅ Authentication Context
- ✅ Responsive Design

## Setup Instructions

### 1. Appwrite Setup

1. Create an account at [Appwrite Cloud](https://cloud.appwrite.io)
2. Create a new project
3. Go to **Auth** settings and enable **Email/Password** authentication
4. Configure your app's domain in the **Platforms** section (add `localhost:3000` for development)

### 2. Environment Configuration

1. Copy `.env.example` to `.env.local`
2. Fill in your Appwrite project details:
   ```env
   NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id_here
   NEXT_PUBLIC_APPWRITE_PROJECT_NAME=your_project_name_here
   NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Authentication Flow

### Registration
- Users can create new accounts with email, password, and full name
- Passwords must be at least 8 characters long
- Email validation is handled by Appwrite
- Users are automatically logged in after successful registration

### Login
- Users can log in with email and password
- Error handling for invalid credentials
- Forgot password functionality available

### Password Recovery
- Users can request password reset via email
- Reset link redirects to `/reset-password` page
- Secure token-based password reset process

### User Session
- Authentication state is managed globally via React Context
- Users stay logged in across browser sessions
- Logout functionality clears all sessions

## File Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with AuthProvider
│   ├── page.js            # Main app page with conditional rendering
│   └── reset-password/
│       └── page.js        # Password reset page
├── components/
│   ├── LoginForm.js       # Login form with forgot password
│   ├── RegisterForm.js    # Registration form
│   └── UserProfile.js     # User profile display
├── context/
│   └── AuthContext.js     # Authentication context provider
└── lib/
    └── appwrite.js        # Appwrite configuration and auth services
```

## Key Components

### AuthContext
Provides global authentication state and methods:
- `user` - Current user object or null
- `loading` - Authentication check status
- `login(email, password)` - Login function
- `register(email, password, name)` - Registration function
- `logout()` - Logout function

### Authentication Service
Located in `src/lib/appwrite.js`, provides:
- `createAccount()` - User registration
- `login()` - User login
- `getCurrentUser()` - Get current user
- `logout()` - User logout
- `forgotPassword()` - Send reset email
- `resetPassword()` - Complete password reset

## Security Features

- Email verification through Appwrite
- Secure password requirements (minimum 8 characters)
- Protected routes (authentication required)
- Secure session management
- Password reset with secure tokens

## Customization

### Styling
The app uses Tailwind CSS with a custom color scheme. The primary color `#FD366E` can be changed throughout the components.

### Additional Features
You can extend the authentication system by:
- Adding email verification requirements
- Implementing role-based access control
- Adding social authentication providers
- Creating user profile editing functionality

## Deployment

1. Deploy to your preferred platform (Vercel, Netlify, etc.)
2. Update environment variables in production
3. Add your production domain to Appwrite platforms
4. Update `NEXT_PUBLIC_APP_URL` to your production URL

## Troubleshooting

### Common Issues

1. **"Invalid credentials" error**
   - Check if email/password authentication is enabled in Appwrite
   - Verify your project ID and endpoint are correct

2. **Password reset not working**
   - Ensure `NEXT_PUBLIC_APP_URL` is set correctly
   - Check if your domain is added to Appwrite platforms

3. **CORS errors**
   - Add your domain (including port) to Appwrite platforms
   - For development, add `localhost:3000`

## License

This project is open source and available under the [MIT License](LICENSE).
