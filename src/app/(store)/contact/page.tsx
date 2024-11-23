import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import logo from "@/assets/Logo-TSI.png";

export default function Contact() {
  return (
    <div className="flex h-full flex-col items-center py-10">
      <Card className="w-full max-w-lg rounded-lg bg-white p-6 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Contact Us
          </CardTitle>
          <CardHeader>
            <Image
              src={logo}
              alt="Group photo"
              width={100}
              height={100}
              className="mx-auto rounded-full"
            />
          </CardHeader>
        </CardHeader>

        <CardContent>
          <div className="mt-4 text-lg text-gray-700">
            <p>
              <strong>Transport and Telecommunication Institute</strong>
            </p>
            <p>Lauvas street 2,</p>
            <p>Riga, LV-1019, Latvia</p>

            <p className="mt-4">
              <strong>Phone:</strong> +371 67100661
            </p>
            <p>
              <strong>Email:</strong> tsi@tsi.lv
            </p>
          </div>

          <h2 className="mt-6 text-xl font-semibold text-gray-800">
            Office Hours
          </h2>
          <p className="text-gray-700">Monday - Friday: 8:30 - 18:30 </p>
          <p className="text-gray-700">Saturday: 8:30 - 16:00</p>
          <p className="text-gray-700">Sunday: Closed</p>
        </CardContent>

        <CardFooter className="text-center">
          <p className="text-sm text-gray-500">
            Disclaimer: This is a study project created by university students
            for an assignment. The contact information is provided for
            illustration purposes and does not represent actual contact details
            for PourPal project.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
