# Deployment Guide

## Environment Variables Setup

This application requires API URLs to be configured for the `/pair` and `/pair-pro` pages to work.

### Required Variables

- `NEXT_PUBLIC_API` - API URL for the standard pairing service (used by `/pair` page)
- `NEXT_PUBLIC_API_PRO` - API URL for the PRO pairing service (used by `/pair-pro` page)

---

## Setup Instructions

### Option 1: Using Replit Secrets (Recommended for Replit)

1. Click the **Secrets** icon (🔒) in the left sidebar
2. Click **"New Secret"** and add:
   - **Key**: `NEXT_PUBLIC_API`
   - **Value**: Your API URL (e.g., `https://your-api.com`)
3. Click **"New Secret"** again and add:
   - **Key**: `NEXT_PUBLIC_API_PRO`
   - **Value**: Your PRO API URL (e.g., `https://your-pro-api.com`)
4. **Restart** the workflow to apply changes

### Option 2: Using .env.local (For Local Development)

1. Edit the `.env.local` file in your project
2. Update the values:
   ```
   NEXT_PUBLIC_API=https://your-actual-api-url.com
   NEXT_PUBLIC_API_PRO=https://your-actual-pro-api-url.com
   ```
3. Restart the development server

### Option 3: For Vercel Deployment

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add both variables with your API URLs
4. Redeploy your application

### Option 4: For Other Platforms

Set the environment variables through your hosting platform's dashboard or configuration file.

---

## API Endpoint Requirements

Both API endpoints should accept requests in the following format:

**Request:**
- **URL**: `{API_URL}/pair?code={phone_number}`
- **Method**: `GET`
- **Example**: `https://your-api.com/pair?code=917074029156`

**Successful Response:**
```json
{
  "status": "success",
  "code": "ABCD-1234-EFGH"
}
```

**Error Response (Blocked):**
```json
{
  "status": "error",
  "message": "This number is blocked"
}
```

**Error Response (Already Connected):**
```json
{
  "status": "error",
  "message": "This number is already connected",
  "connected": true
}
```

---

## Testing

After setting up environment variables:

1. **Test /pair page**: Visit `http://your-site.com/pair`
2. **Test /pair-pro page**: Visit `http://your-site.com/pair-pro`
3. Enter a test phone number
4. Check that the API is being called correctly

If environment variables are not configured, users will see: **"API URL is not configured. Please contact the administrator."**

If the API is unreachable or returns an error, users will see the specific error message with debugging information.

---

## Common Issues

### "API URL is not configured"
- The environment variable is missing
- Solution: Add the secret in Replit Secrets or .env.local

### "Connection failed: Failed to fetch"
- CORS issue or API is down
- Solution: Ensure your API allows requests from your domain and is running

### "Connection failed: Server responded with status 500"
- API server error
- Solution: Check your API server logs

### Changes not reflecting
- Solution: Restart the workflow after updating environment variables
