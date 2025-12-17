export default function GoogleMap() {
  return (
    <div className="w-full h-100 rounded-lg overflow-hidden shadow">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.8605300770437!2d77.5243620756508!3d28.48374659082143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea9a8626e3ab%3A0x3222f059738a9691!2sGreen%20City%20Hospital!5e0!3m2!1sen!2sin!4v1765955434351!5m2!1sen!2sin" 
       width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="border-0" >
        </iframe>
    </div>
  );
}
