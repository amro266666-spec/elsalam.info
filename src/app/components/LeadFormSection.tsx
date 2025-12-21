import { useForm } from 'react-hook-form';
import { Shield, CircleCheck } from 'lucide-react';
import { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  projectType: string;
}

export function LeadFormSection() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    console.log('Form Data:', data);
    // Here you would normally send the data to your backend
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="lead-form" className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 text-[#0B1C2D]" style={{ fontWeight: 700 }}>
              احصل على عرض سعر خلال 24 ساعة
            </h2>
            <p className="text-[#2F2F2F]">
              املأ النموذج وسيتواصل معك أحد مهندسينا لمناقشة مشروعك
            </p>
          </div>

          {isSubmitted && (
            <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3 text-right">
              <CircleCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
              <p className="text-green-800">تم إرسال طلبك بنجاح! سنتواصل معك قريبًا.</p>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="bg-[#E6E6E6] p-8 rounded-lg shadow-lg">
            <div className="space-y-6">
              {/* Name Field */}
              <div className="text-right">
                <label htmlFor="name" className="block mb-2 text-[#0B1C2D]">
                  الاسم <span className="text-[#FF8C00]">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  {...register('name', { required: 'الاسم مطلوب' })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] text-right"
                  placeholder="أدخل اسمك الكامل"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Phone Field */}
              <div className="text-right">
                <label htmlFor="phone" className="block mb-2 text-[#0B1C2D]">
                  رقم الهاتف <span className="text-[#FF8C00]">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register('phone', {
                    required: 'رقم الهاتف مطلوب',
                    pattern: {
                      value: /^[0-9+\-\s()]+$/,
                      message: 'الرجاء إدخال رقم هاتف صحيح',
                    },
                  })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] text-right"
                  placeholder="05xxxxxxxx"
                  dir="ltr"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Project Type Field */}
              <div className="text-right">
                <label htmlFor="projectType" className="block mb-2 text-[#0B1C2D]">
                  نوع المشروع <span className="text-[#2F2F2F]/60">(اختياري)</span>
                </label>
                <select
                  id="projectType"
                  {...register('projectType')}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF8C00] text-right"
                >
                  <option value="">اختر نوع المشروع</option>
                  <option value="تشكيل معادن">تشكيل معادن</option>
                  <option value="أعمال لحام">أعمال لحام</option>
                  <option value="قص ليزر">قص ليزر وCNC</option>
                  <option value="هياكل معدنية">هياكل معدنية</option>
                  <option value="أخرى">أخرى</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#FF8C00] hover:bg-[#FF8C00]/90 text-white py-4 rounded-lg transition-all shadow-md hover:shadow-lg"
              >
                إرسال الطلب
              </button>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-2 text-[#2F2F2F]/70 text-sm">
                <Shield className="w-4 h-4" />
                <span>بياناتك آمنة ولن يتم مشاركتها</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}