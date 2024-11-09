import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function FAQ() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-100 py-8">
      <Card className="w-full max-w-3xl rounded-lg bg-white p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>

        <CardContent className="mt-6 space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              1. What types of products do you offer?
            </h3>
            <p className="text-gray-700">
              We offer a variety of alcoholic beverages, including wines,
              spirits, and craft beers from both local and international
              suppliers. Our goal is to provide a diverse selection to suit a
              wide range of tastes and preferences.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              2. Who are your suppliers?
            </h3>
            <p className="text-gray-700">
              Our suppliers are carefully selected to ensure quality and
              authenticity. We work with reputable wineries, distilleries, and
              breweries, both local and international, to bring you the best
              products. We prioritize suppliers that are committed to
              sustainable and ethical practices.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              3. What are the available delivery options?
            </h3>
            <p className="text-gray-700">
              We offer two main delivery options:
              <ul className="ml-6 mt-2 list-disc text-gray-700">
                <li>
                  <strong>Home Delivery:</strong> Direct delivery to your
                  specified address, available within our delivery coverage
                  area.
                </li>
                <li>
                  <strong>Parcel Machine Pickup:</strong> Convenient delivery to
                  a local parcel machine. You'll receive a code to access your
                  package at any time that suits you.
                </li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              4. How long does delivery take?
            </h3>
            <p className="text-gray-700">
              Delivery times may vary depending on your location and the
              selected delivery option. Generally, home deliveries take 1-3
              business days, while parcel machine deliveries are typically
              available within 1-2 business days.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              5. Do you have age restrictions for purchasing alcohol?
            </h3>
            <p className="text-gray-700">
              Yes, you must be of legal drinking age in your country to place an
              order. We verify age during both the checkout process and upon
              delivery to ensure compliance with legal requirements.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              6. What payment methods do you accept?
            </h3>
            <p className="text-gray-700">
              We accept major credit cards, debit cards, and secure online
              payment methods. Currently, we do not accept cash on delivery.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              7. Can I return or exchange products?
            </h3>
            <p className="text-gray-700">
              Due to regulations regarding alcohol sales, we cannot accept
              returns or exchanges unless the product is damaged or incorrect.
              If there’s an issue with your order, please contact our support
              team within 24 hours of receiving your delivery.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              8. How do I contact customer support?
            </h3>
            <p className="text-gray-700">
              You can reach our customer support team via email or phone. Please
              visit our{" "}
              <a href="/contact" className="text-blue-600 underline">
                Contact
              </a>{" "}
              page for details. Our team is available Monday to Friday from 9:00
              AM to 6:00 PM.
            </p>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>
              Disclaimer: This FAQ page is part of a study project created by
              university students for educational purposes. The information
              provided here is illustrative and may not represent a real or
              operational business.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
