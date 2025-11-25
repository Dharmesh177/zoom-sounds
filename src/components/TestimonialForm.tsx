import { useState } from 'react';
import { Star, Send } from 'lucide-react';

interface TestimonialFormProps {
  onClose?: () => void;
}

export default function TestimonialForm({ onClose }: TestimonialFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    rating: 5
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('http://localhost:3000/api/v1/testinomial', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', message: '', rating: 5 });
        setTimeout(() => {
          if (onClose) onClose();
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 lg:p-8 border border-slate-200 shadow-sm">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Share Your Experience</h3>
        <p className="text-slate-600">Your feedback helps us improve and helps others make informed decisions</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label htmlFor="rating" className="block text-sm font-semibold text-slate-700 mb-2">
            Rating
          </label>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setFormData({ ...formData, rating: star })}
                className="transition-transform hover:scale-110"
              >
                <Star
                  className={`h-8 w-8 ${
                    star <= formData.rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-slate-300'
                  }`}
                />
              </button>
            ))}
            <span className="ml-2 text-sm font-medium text-slate-600">
              {formData.rating} / 5
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
            Your Review
          </label>
          <textarea
            id="message"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
            placeholder="Share your experience with our products or services..."
          />
        </div>

        {submitStatus === 'success' && (
          <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm">
            Thank you for your feedback! Your testimonial will be reviewed before publishing.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
            Something went wrong. Please try again later.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-sm hover:shadow-md disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Submitting...
            </>
          ) : (
            <>
              <Send className="h-5 w-5" />
              Submit Testimonial
            </>
          )}
        </button>
      </form>
    </div>
  );
}
