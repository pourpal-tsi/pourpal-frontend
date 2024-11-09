import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function TermsOfService() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 py-8">
      <Card className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Terms of Service
          </CardTitle>
        </CardHeader>

        <CardContent className="mt-6 space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            1. Introduction
          </h2>
          <p className="text-gray-700">
            Welcome to our online alcohol store. These Terms of Service
            ("Terms") govern your use of our website and services. By accessing
            or using our website, you agree to comply with and be bound by these
            Terms.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            2. Eligibility
          </h2>
          <p className="text-gray-700">
            You must be of legal drinking age in your country to use our
            services. By placing an order, you confirm that you are of legal age
            and agree to our age verification process. We reserve the right to
            refuse service or cancel orders if we suspect the user does not meet
            this requirement.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            3. User Responsibilities
          </h2>
          <p className="text-gray-700">
            Users are responsible for maintaining the confidentiality of their
            account information and for all activities that occur under their
            account. You agree not to use our services for any illegal or
            unauthorized purpose, and you must not violate any laws in your
            jurisdiction through your use of our service.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            4. Ordering and Payment
          </h2>
          <p className="text-gray-700">
            All orders are subject to availability and confirmation. When you
            place an order, you agree to provide accurate and complete
            information. Payment must be made at the time of order placement.
            Accepted payment methods include major credit cards and other secure
            online payment options. We do not accept cash on delivery.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            5. Delivery and Shipping
          </h2>
          <p className="text-gray-700">
            We offer home delivery and parcel machine pickup options. Delivery
            times and fees may vary depending on your location. While we strive
            to ensure timely delivery, we are not liable for delays outside our
            control, including but not limited to carrier delays and force
            majeure events.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            6. Returns and Refunds
          </h2>
          <p className="text-gray-700">
            Due to regulations on alcohol sales, returns are only accepted if
            the product is damaged or incorrect. If you experience an issue with
            your order, please contact us within 24 hours of receiving your
            items. Refunds or exchanges will be considered on a case-by-case
            basis and may require photographic evidence.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            7. Disclaimer of Warranties
          </h2>
          <p className="text-gray-700">
            Our services and products are provided "as is" without any
            warranties, express or implied. While we strive to ensure product
            quality, we do not guarantee that our services will meet your
            expectations or that any errors will be corrected.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            8. Limitation of Liability
          </h2>
          <p className="text-gray-700">
            To the maximum extent permitted by law, we are not liable for any
            direct, indirect, incidental, or consequential damages arising from
            your use of our services or products, including, but not limited to,
            loss of profits, data, or other intangible losses.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            9. Changes to Terms
          </h2>
          <p className="text-gray-700">
            We may modify these Terms from time to time. Any changes will be
            posted on this page, and continued use of our services after changes
            have been posted constitutes your acceptance of the revised Terms.
            We encourage you to review the Terms periodically.
          </p>

          <h2 className="text-xl font-semibold text-gray-800">
            10. Contact Information
          </h2>
          <p className="text-gray-700">
            If you have any questions or concerns regarding these Terms, please
            contact us through our{" "}
            <a href="/contact" className="text-blue-600 underline">
              Contact
            </a>{" "}
            page.
          </p>

          <div className="mt-6 text-sm text-gray-500">
            <p>
              Disclaimer: This Terms of Service document is part of a study
              project created by university students for educational purposes.
              The terms and policies outlined here are illustrative and may not
              represent the actual policies of an operational business.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
