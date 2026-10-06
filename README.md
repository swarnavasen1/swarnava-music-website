# Swarnava Sen — Official Music Website

## Run locally
1. Install Node.js 20.19+.
2. Open this project folder in a terminal.
3. Run `npm install`
4. Run `npm run dev`
5. Open the local URL shown by Vite.

## Add your media
Put MP3s in `public/music/`, MP4s in `public/videos/`, and JPG/PNG artwork in `public/images/`.

## Production build
Run:
`npm run build`

Vite creates the production site in `dist/`. Upload/deploy that folder to your static host.

## Real song sales
The current Buy button is intentionally a demo. For secure real payments, add a server-side payment flow:
1. Frontend asks `/api/create-order` for an order.
2. Server creates the payment order/session.
3. User completes checkout.
4. Server verifies the payment signature/webhook.
5. Server returns a short-lived signed download URL for the purchased audio.
6. Keep paid MP3s outside the public folder/private storage.

Never put payment secret keys in `src/main.js` or any public frontend file.

## Contact
Swarnava Sen
swarnavasen299@gmail.com
+91 87774 53056
