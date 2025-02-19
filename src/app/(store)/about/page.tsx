import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function About() {
  return (
    <div className="flex h-full flex-col items-center py-10">
      <Card className="w-full max-w-2xl rounded-lg bg-white p-6 shadow-lg">
        <CardHeader>
          <img
            src="https://les-raccourcis-clavier.fr/wp-content/uploads/2019/04/emoji-monocle.png"
            alt="Group photo"
            className="mx-auto rounded-full pl-1 w-64"
          />
        </CardHeader>

        <CardContent>
          <CardTitle className="mt-4 text-center text-2xl font-bold">
            About Us
          </CardTitle>
          <p className="mt-4 text-lg text-gray-700">
            Welcome to our project! We are a group of Transport and
            Telecommunication Institute university students driven by the desire
            to explore and innovate within the field of web development. This
            project was created as part of our group project apply our
            knowledge, enhance our teamwork skills, and learn more building
            dynamic, user-friendly applications in Agile Management Framework.
          </p>
        </CardContent>

        <CardFooter className="text-center">
          <p className="text-sm text-gray-500">
            Disclaimer: This is a study project created by university students
            for an assignment. The content is meant solely for educational
            purposes and may not reflect a fully polished or commercial product.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
