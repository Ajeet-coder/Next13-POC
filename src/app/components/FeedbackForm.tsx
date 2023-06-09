import { revalidatePath } from "next/cache";

const feedback: string[] = [];

export default function FeedbackForm() {
  async function addFeedBack(data: FormData) {
    "use server";
    const message = data.get("message") as string;
    feedback.push(message);
    revalidatePath("/");
  }
  return (
    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
        FeedBack
      </h2>
      <form className="space-y-8" action={addFeedBack}>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Your message
          </label>
          <textarea
            id="message"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave a comment..."
            name="message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Send message
        </button>
      </form>
      <ul>
        {feedback.map((message, indx) => (
          <li key={indx}>{message}</li>
        ))}
      </ul>
    </div>
  );
}
