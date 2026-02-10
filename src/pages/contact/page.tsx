import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('이름, 이메일, 문의내용은 필수 입력 항목입니다.');
      return;
    }

    if (formData.message.length > 500) {
      alert('문의내용은 500자 이내로 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d5o7vqs8q3pa76svmoog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            <div className="flex items-center gap-1 w-full justify-between md:justify-start">
              <h1 className="flex items-center">
                <a href="/" className="cursor-pointer">
                  <img 
                    src="https://static.readdy.ai/image/1868aa3cdc51206ed6db9b8de57d8990/ee08f51b732653cc943d10fe068cffe3.png" 
                    alt="Sensy92" 
                    className="h-8 md:h-16"
                  />
                </a>
              </h1>
              <nav className="flex items-center gap-1 md:gap-6 text-xs md:text-base">
                <a href="/" className="text-gray-700 hover:text-teal-500 transition-colors cursor-pointer">홈</a>
                <a href="/about" className="text-gray-700 hover:text-teal-500 transition-colors cursor-pointer">회사소개</a>
                <a href="/print-method" className="text-gray-700 hover:text-teal-500 transition-colors cursor-pointer">프린트방식</a>
                <a href="https://blog.naver.com/wow9888" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-teal-500 transition-colors cursor-pointer">작업후기</a>
                <a href="/contact" className="text-teal-500 hover:text-teal-600 transition-colors cursor-pointer">문의하기</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Hero */}
      <section className="bg-gradient-to-br from-teal-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            문의하기
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            전사나염, DTF 프린트에 대한 궁금한 점이 있으시면 언제든지 문의해주세요.<br />
            빠르고 정확한 답변을 드리겠습니다.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">온라인 문의</h3>
              <form id="contact-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-sm"
                    placeholder="이름을 입력해주세요"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    이메일 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-sm"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    연락처
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-sm"
                    placeholder="010-0000-0000"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    회사명
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-sm"
                    placeholder="회사명을 입력해주세요"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    문의내용 <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    maxLength={500}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all text-sm resize-none"
                    placeholder="문의하실 내용을 입력해주세요 (최대 500자)"
                  />
                  <p className="text-xs text-gray-500 mt-1 text-right">
                    {formData.message.length}/500
                  </p>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-teal-50 border border-teal-200 text-teal-700 px-4 py-3 rounded-lg">
                    문의가 성공적으로 접수되었습니다. 빠른 시일 내에 답변드리겠습니다.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    문의 접수 중 오류가 발생했습니다. 다시 시도해주세요.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-teal-500 text-white py-4 rounded-lg font-semibold hover:bg-teal-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
                >
                  {isSubmitting ? '전송 중...' : '문의하기'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">연락처 정보</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-phone-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">전화</h4>
                      <p className="text-gray-600">010-9888-9888</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-mail-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">이메일</h4>
                      <p className="text-gray-600">wow9888@naver.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-map-pin-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">주소</h4>
                      <p className="text-gray-600">경기도 화성시 향남읍 토성로 42-22</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className="ri-time-line text-white text-xl"></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">운영시간</h4>
                      <p className="text-gray-600">평일 09:00 - 18:00</p>
                      <p className="text-gray-500 text-sm mt-1">주말 및 공휴일 휴무</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">빠른 상담</h3>
                <p className="text-gray-600 mb-6">
                  급하신 문의사항은 전화로 연락주시면 더욱 빠른 상담이 가능합니다.
                </p>
                <a
                  href="tel:010-9888-9888"
                  className="inline-flex items-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-phone-line"></i>
                  전화 상담하기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-teal-500 to-teal-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img 
                src="https://i.imgur.com/CDJYwUP.png" 
                alt="Sensy92" 
                className="h-12 mb-4"
              />
              <p className="text-teal-50 text-sm">
                전사나염 전문 업체<br />
                고품질 DTF 프린트 서비스
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">빠른 링크</h4>
              <ul className="space-y-2 text-teal-50">
                <li><a href="/" className="hover:text-white transition-colors cursor-pointer">홈</a></li>
                <li><a href="/about" className="hover:text-white transition-colors cursor-pointer">회사소개</a></li>
                <li><a href="/print-method" className="hover:text-white transition-colors cursor-pointer">프린트방식</a></li>
                <li><a href="https://blog.naver.com/wow9888" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer">작업후기</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors cursor-pointer">문의하기</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">연락처</h4>
              <ul className="space-y-2 text-teal-50 text-sm">
                <li className="flex items-center gap-2">
                  <i className="ri-phone-line"></i>
                  010-9888-9888
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-mail-line"></i>
                  wow9888@naver.com
                </li>
                <li className="flex items-center gap-2">
                  <i className="ri-map-pin-line"></i>
                  경기도 화성시 향남읍 토성로 42-22
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-teal-400 pt-8 text-center text-teal-50 text-sm">
            <p>&copy; 2025 Sensy92. All rights reserved. | <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer">Powered by Readdy</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
