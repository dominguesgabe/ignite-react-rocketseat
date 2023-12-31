import { stripe } from "@/lib/stripe"
import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  if (request.method !== "POST") return response.status(405)

  const successUrl =
    process.env.NEXT_URL + "/success?session_id={CHECKOUT_SESSION_ID}"
  const cancelUrl = process.env.NEXT_URL
  const { priceId } = request.body

  if (!priceId) return response.status(400).json({ error: "Price not found." })

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
  })

  response.status(201).json({
    checkoutUrl: checkoutSession.url,
  })
}
