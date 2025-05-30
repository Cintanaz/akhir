import { Quote } from 'lucide-react';

function TestimonialCard({ name, role, image, testimonial }) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow-lg relative">
      <Quote size={24} className="absolute top-4 right-4 text-gold/20" />
      <div className="flex items-center mb-4">
        <img 
          src={image} 
          alt={name} 
          className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-gold/30"
        />
        <div>
          <h4 className="font-medium text-white">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-300">"{testimonial}"</p>
    </div>
  );
}

export default TestimonialCard;