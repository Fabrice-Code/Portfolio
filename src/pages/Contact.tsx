export default function Contact() {
  return (
    <div>
        <div className="place-items-center flex flex-col items-center justify-center h-screen gap-4">
            <h1 className="text-red-900 font-bold">
                Contact Seite
            </h1>

            <p className="text-gray-700">
                Hier finden Sie Informationen über mich und wie Sie mich erreichen können.
            </p>

            <textarea name="message" placeholder="Ihre Nachricht..." className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
        </div>
    </div>
  )
}