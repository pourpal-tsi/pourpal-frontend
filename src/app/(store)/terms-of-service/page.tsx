import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function TermsOfService() {
  return (
    <div className="flex h-full flex-col items-center py-10">
      <Card className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Terms of Service
          </CardTitle>
        </CardHeader>

        <p className="text-gray-700">
          Welcome to our online alcohol store. These Terms of Service ("Terms")
          govern your use of our website and services. By accessing or using our
          website, you agree to comply with and be bound by these Terms.
        </p>

        <Accordion type="multiple" className="mt-6 space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold text-gray-800">
              1. Eligibility
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              You must be of legal drinking age in your country to use our
              services. By placing an order, you confirm that you are of legal
              age and agree to our age verification process. We reserve the
              right to refuse service or cancel orders if we suspect the user
              does not meet this requirement.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold text-gray-800">
              2. User Responsibilities
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Users are responsible for maintaining the confidentiality of their
              account information and for all activities that occur under their
              account. You agree not to use our services for any illegal or
              unauthorized purpose, and you must not violate any laws in your
              jurisdiction through your use of our service.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold text-gray-800">
              3. Ordering and Payment
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              All orders are subject to availability and confirmation. When you
              place an order, you agree to provide accurate and complete
              information. Payment must be made at the time of order placement.
              Accepted payment methods include major credit cards and other
              secure online payment options. We do not accept cash on delivery.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semibold text-gray-800">
              4. Delivery and Shipping
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              We offer home delivery and parcel machine pickup options. Delivery
              times and fees may vary depending on your location. While we
              strive to ensure timely delivery, we are not liable for delays
              outside our control, including but not limited to carrier delays
              and force majeure events.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-semibold text-gray-800">
              5. Returns and Refunds
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Due to regulations on alcohol sales, returns are only accepted if
              the product is damaged or incorrect. If you experience an issue
              with your order, please contact us within 24 hours of receiving
              your items. Refunds or exchanges will be considered on a
              case-by-case basis and may require photographic evidence.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl font-semibold text-gray-800">
              6. Disclaimer of Warranties
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Our services and products are provided "as is" without any
              warranties, express or implied. While we strive to ensure product
              quality, we do not guarantee that our services will meet your
              expectations or that any errors will be corrected.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-xl font-semibold text-gray-800">
              7. Limitation of Liability
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              To the maximum extent permitted by law, we are not liable for any
              direct, indirect, incidental, or consequential damages arising
              from your use of our services or products, including, but not
              limited to, loss of profits, data, or other intangible losses.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger className="text-xl font-semibold text-gray-800">
              8. Changes to Terms
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              We may modify these Terms from time to time. Any changes will be
              posted on this page, and continued use of our services after
              changes have been posted constitutes your acceptance of the
              revised Terms. We encourage you to review the Terms periodically.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger className="text-xl font-semibold text-gray-800">
              9. Contact Information
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              If you have any questions or concerns regarding these Terms,
              please contact us through our{" "}
              <a href="/contact" className="text-blue-600 underline">
                Contact
              </a>{" "}
              page.
            </AccordionContent>
          </AccordionItem>

          <div className="mt-6 text-sm text-gray-500">
            <p>
              Disclaimer: This Terms of Service document is part of a study
              project created by university students for educational purposes.
              The terms and policies outlined here are illustrative and may not
              represent the actual policies of an operational business.
            </p>
          </div>
        </Accordion>
      </Card>
    </div>
  );
}
