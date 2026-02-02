import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund & Return Policy | Pong Party Games',
  description: 'Learn about our refund and return policy for Pong Party Games products.',
};

export default function RefundPolicyPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[900px] mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-display text-[36px] sm:text-[42px] md:text-[48px] font-semibold text-[#1a2b4a] mb-4">
            Refund & Return Policy
          </h1>
          <p className="font-body text-[17px] leading-relaxed text-[#2d3748]">
            At Pong Party Games ("PPG"), we take pride in creating high-quality, USA-made products and want you to love your game. Every product is carefully designed, tested, and packaged before shipping. If something isn't right, we're here to help — and you'll always be talking to a real person.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-10">
          {/* When Refunds or Returns Are Considered */}
          <section>
            <h2 className="font-display text-[24px] sm:text-[28px] font-semibold text-[#1a2b4a] mb-4">
              When Refunds or Returns Are Considered
            </h2>
            <p className="font-body text-[16px] leading-relaxed text-[#2d3748] mb-4">
              We will review refund or return requests in the following situations:
            </p>
            <ul className="font-body text-[16px] leading-relaxed text-[#2d3748] space-y-2 ml-6 list-disc">
              <li>Your product arrives with visible shipping damage (Please document with your shipping carrier and notify PPG immediately.)</li>
              <li>You received the wrong item</li>
              <li>There is a manufacturing defect</li>
            </ul>
            <p className="font-body text-[16px] leading-relaxed text-[#2d3748] mt-4">
              All requests must be submitted within <strong>7 days of delivery</strong> (or as required by law).
            </p>
          </section>

          {/* How to Request */}
          <section>
            <h2 className="font-display text-[24px] sm:text-[28px] font-semibold text-[#1a2b4a] mb-4">
              How to Request a Refund or Return
            </h2>
            <p className="font-body text-[16px] leading-relaxed text-[#2d3748] mb-4">
              To get started, please contact us using the information below:
            </p>
            <div className="bg-[#f5f5f7] rounded-lg p-6 mb-4">
              <p className="font-body text-[16px] text-[#1a2b4a]">
                <strong>Email:</strong>{' '}
                <a href="mailto:info@pongpartygames.com" className="text-[#0066cc] hover:underline">
                  info@pongpartygames.com
                </a>
              </p>
            </div>
            <p className="font-body text-[16px] leading-relaxed text-[#2d3748] mb-3">
              Please include the following details in your request:
            </p>
            <ul className="font-body text-[16px] leading-relaxed text-[#2d3748] space-y-2 ml-6 list-disc">
              <li>Your order number</li>
              <li>A brief description of the issue</li>
              <li>Clear photos or videos showing the problem (if applicable)</li>
            </ul>
            <p className="font-body text-[16px] leading-relaxed text-[#2d3748] mt-4">
              We aim to respond within <strong>24 hours</strong>. If you do not hear back, you may call or text us at{' '}
              <a href="tel:484-356-4377" className="text-[#0066cc] hover:underline font-semibold">
                (484) 356-4377
              </a>.
            </p>
          </section>

          {/* What Happens Next */}
          <section>
            <h2 className="font-display text-[24px] sm:text-[28px] font-semibold text-[#1a2b4a] mb-4">
              What Happens Next
            </h2>
            <p className="font-body text-[16px] leading-relaxed text-[#2d3748] mb-4">
              Each request is reviewed on a case-by-case basis. Depending on the situation, we may take one or more of the following actions:
            </p>
            <ul className="font-body text-[16px] leading-relaxed text-[#2d3748] space-y-2 ml-6 list-disc">
              <li>Send a replacement</li>
              <li>Repair the product</li>
              <li>Issue a partial or full refund</li>
              <li>Offer another reasonable solution</li>
            </ul>
            <p className="font-body text-[16px] leading-relaxed text-[#2d3748] mt-4">
              We may request that the product be returned before issuing a refund or replacement. Returned items must be in their original condition unless they arrive damaged.
            </p>
          </section>

          {/* Items Not Eligible */}
          <section>
            <h2 className="font-display text-[24px] sm:text-[28px] font-semibold text-[#1a2b4a] mb-4">
              Items Not Eligible for Refunds
            </h2>
            <ul className="font-body text-[16px] leading-relaxed text-[#2d3748] space-y-2 ml-6 list-disc">
              <li>Damage caused by misuse or negligence</li>
              <li>Products that have been altered or modified after delivery</li>
            </ul>
          </section>

          {/* Shipping Costs */}
          <section>
            <h2 className="font-display text-[24px] sm:text-[28px] font-semibold text-[#1a2b4a] mb-4">
              Shipping Costs
            </h2>
            <ul className="font-body text-[16px] leading-relaxed text-[#2d3748] space-y-2 ml-6 list-disc">
              <li>Original shipping costs are non-refundable unless the issue is caused by a PPG error or manufacturing defect</li>
              <li>Return shipping costs are the customer's responsibility unless otherwise approved by PPG</li>
            </ul>
          </section>

          {/* Refund Timing */}
          <section>
            <h2 className="font-display text-[24px] sm:text-[28px] font-semibold text-[#1a2b4a] mb-4">
              Refund Timing
            </h2>
            <p className="font-body text-[16px] leading-relaxed text-[#2d3748]">
              Approved refunds are issued to the original payment method and typically appear within <strong>5–10 business days</strong>, depending on your payment provider.
            </p>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="font-display text-[24px] sm:text-[28px] font-semibold text-[#1a2b4a] mb-4">
              Policy Updates
            </h2>
            <p className="font-body text-[16px] leading-relaxed text-[#2d3748]">
              This policy may be updated from time to time. The version in effect at the time of purchase will apply.
            </p>
          </section>
        </div>

        {/* Contact Box */}
        <div className="mt-12 bg-gradient-to-br from-[#0066cc] to-[#1a2b4a] rounded-xl p-8 text-white">
          <h3 className="font-display text-[22px] font-semibold mb-3">
            Still Have Questions?
          </h3>
          <p className="font-body text-[16px] leading-relaxed mb-5">
            We're here to help! Contact us directly and speak with a real person.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="mailto:info@pongpartygames.com"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#1a2b4a] font-semibold rounded-full hover:bg-gray-100 transition-colors"
            >
              Email Us
            </a>
            <a 
              href="tel:484-356-4377"
              className="inline-flex items-center justify-center px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-colors border border-white/30"
            >
              Call (484) 356-4377
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
