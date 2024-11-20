import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function PrivacyPolicy() {
  return (
    <div className="flex h-full flex-col items-center py-10">
      <Card className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Privacy Policy
          </CardTitle>
        </CardHeader>

        <p className="text-gray-700">
          This Privacy Policy outlines how we collect, use, and protect your
          personal information when you use our online alcohol store. By using
          our website, you agree to the practices described in this policy.
        </p>

        <Accordion type="multiple" className="mt-6 space-y-4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold text-gray-800">
              1. Information We Collect
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              We collect information to provide better services to our users.
              The information we collect includes:
              <ul className="ml-6 mt-2 list-disc text-gray-700">
                <li>
                  <strong>Personal Information:</strong> Name, email address,
                  shipping address, and payment information.
                </li>
                <li>
                  <strong>Usage Data:</strong> Information about how you
                  interact with our website, such as pages visited, time spent
                  on each page, and links clicked.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold text-gray-800">
              2. Use of Cookies
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Our website uses cookies and similar tracking technologies to
              enhance your experience, gather analytics, and understand how
              users interact with our services. Cookies are small text files
              stored on your device that help us:
              <ul className="ml-6 mt-2 list-disc text-gray-700">
                <li>Remember your preferences and settings.</li>
                <li>Collect data on website traffic and usage patterns.</li>
                <li>Improve website functionality and user experience.</li>
              </ul>
              You may choose to disable cookies through your browser settings;
              however, this may affect your ability to use certain features on
              our website.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold text-gray-800">
              3. How We Use Your Information
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              We use your information to:
              <ul className="ml-6 mt-2 list-disc text-gray-700">
                <li>Process and fulfill your orders.</li>
                <li>Provide customer support and respond to inquiries.</li>
                <li>Analyze website usage for improvements.</li>
                <li>
                  Comply with legal obligations, such as age verification for
                  alcohol purchases.
                </li>
              </ul>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semibold text-gray-800">
              4. Data Security
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              We are committed to protecting your data. We implement
              industry-standard security measures to protect your information
              from unauthorized access, alteration, disclosure, or destruction.
              However, no online service can be 100% secure, and we cannot
              guarantee the absolute security of your data.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-xl font-semibold text-gray-800">
              5. Third-Party Services
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              We may use third-party services to process payments, provide
              analytics, and manage advertising. These services may have access
              to some of your information as needed to perform their functions
              but are bound by confidentiality agreements and legal obligations.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger className="text-xl font-semibold text-gray-800">
              6. Your Rights
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              You have the right to:
              <ul className="ml-6 mt-2 list-disc text-gray-700">
                <li>Access, update, or delete your personal information.</li>
                <li>
                  Opt-out of certain data processing activities, such as
                  marketing communications.
                </li>
                <li>Withdraw consent for data collection, where applicable.</li>
              </ul>
              To exercise these rights, please contact us at{" "}
              <a href="mailto:tsi@tsi.lv" className="text-blue-600 underline">
                tsi@tsi.lv
              </a>
              .
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger className="text-xl font-semibold text-gray-800">
              7. Changes to This Policy
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page, and we encourage you to review it
              periodically to stay informed of our practices.
            </AccordionContent>
          </AccordionItem>

          <div className="mt-6 text-sm text-gray-500">
            <p>
              Disclaimer: This Privacy Policy is part of a study project created
              by university students for educational purposes. The practices
              outlined here may not reflect the policies of a real or
              operational business.
            </p>
          </div>
        </Accordion>
      </Card>
    </div>
  );
}
