import { useState, useEffect } from 'react';

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    printMethod: '',
    printPosition: '',
    printSize: '',
    quantity: '',
    productType: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    'https://i.imgur.com/c30MbR6.jpg',
    'https://i.imgur.com/DoxAh0c.jpg',
    'https://i.imgur.com/Y2LlOZU.jpg',
    'https://i.imgur.com/OFbPJbq.jpg',
    'https://i.imgur.com/mUgnfvE.jpg',
    'https://i.imgur.com/4mwtfaQ.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d5oolo8f4392hm13ofvg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString()
      });

      if (response.ok) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          printMethod: '',
          printPosition: '',
          printSize: '',
          quantity: '',
          productType: '',
          details: ''
        });
        setTimeout(() => {
          setShowQuoteModal(false);
          setSubmitSuccess(false);
        }, 2000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
                <a href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }} className="text-gray-700 hover:text-teal-500 transition-colors cursor-pointer">홈</a>
                <a href="/about" className="text-gray-700 hover:text-teal-500 transition-colors cursor-pointer">회사소개</a>
                <a href="/print-method" className="text-gray-700 hover:text-teal-500 transition-colors cursor-pointer">프린트방식</a>
                <a href="https://blog.naver.com/wow9888" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-teal-500 transition-colors cursor-pointer">작업후기</a>
                <a href="https://pf.kakao.com/_xfAxjxhs" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-teal-500 transition-colors cursor-pointer">카톡문의</a>
                <button 
                  onClick={() => setShowQuoteModal(true)}
                  className="bg-teal-500 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg hover:bg-teal-600 transition-colors cursor-pointer whitespace-nowrap"
                >
                  견적문의
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[800px] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${image}')`
            }}
          >
          </div>
        ))}
        
        {/* Company Name Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-6xl md:text-7xl font-black text-white mb-4" style={{ fontFamily: "'Noto Sans KR', sans-serif", textShadow: '2px 2px 8px rgba(0,0,0,0.7), 0 0 20px rgba(0,0,0,0.5)', letterSpacing: '0.3em' }}>
              와 우 전 사
            </h2>
            <p className="text-xl md:text-2xl text-white font-semibold" style={{ fontFamily: "'Noto Sans KR', sans-serif", textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
              공장직영으로 운영되는 전사&나염 업체
            </p>
          </div>
        </div>
        
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
          </div>
        </div>
      </section>

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white">
              <h3 className="text-2xl font-bold text-gray-900">견적 문의</h3>
              <button 
                onClick={() => setShowQuoteModal(false)}
                className="text-gray-400 hover:text-gray-600 cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            
            <form onSubmit={handleQuoteSubmit} className="p-6" data-readdy-form id="home-quote-form">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">이름 *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="이름을 입력하세요"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">이메일 *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="example@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">연락처 *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="010-0000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">프린트 방식 *</label>
                  <select
                    name="printMethod"
                    value={formData.printMethod}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">선택하세요</option>
                    <option value="실사전사">실사전사</option>
                    <option value="DTF전사">DTF전사</option>
                    <option value="나염1도">나염1도</option>
                    <option value="나염2도 이상">나염2도 이상</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">인쇄위치 *</label>
                  <select
                    name="printPosition"
                    value={formData.printPosition}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">선택하세요</option>
                    <option value="앞">앞</option>
                    <option value="뒤">뒤</option>
                    <option value="왼가슴">왼가슴</option>
                    <option value="소매">소매</option>
                    <option value="목 뒤">목 뒤</option>
                    <option value="기타">기타</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">인쇄 사이즈 *</label>
                  <select
                    name="printSize"
                    value={formData.printSize}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  >
                    <option value="">선택하세요</option>
                    <option value="10cm미만">10cm미만</option>
                    <option value="A4">A4</option>
                    <option value="A3">A3</option>
                    <option value="특대">특대</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">수량 *</label>
                  <input
                    type="text"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="예: 100장"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">제품 종류</label>
                  <input
                    type="text"
                    name="productType"
                    value={formData.productType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="예: 티셔츠, 후드티 등"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">상세 내용</label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    maxLength={500}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                    placeholder="견적 문의 내용을 자세히 입력해주세요 (최대 500자)"
                  />
                  <div className="text-right text-sm text-gray-500 mt-1">
                    {formData.details.length}/500
                  </div>
                </div>
              </div>

              {submitSuccess && (
                <div className="mt-4 p-4 bg-teal-50 text-teal-700 rounded-lg">
                  견적 문의가 성공적으로 접수되었습니다!
                </div>
              )}

              <div className="mt-6 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowQuoteModal(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed cursor-pointer whitespace-nowrap"
                >
                  {isSubmitting ? '전송 중...' : '견적 문의하기'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="mb-4">
                <img 
                  src="https://static.readdy.ai/image/1868aa3cdc51206ed6db9b8de57d8990/56583460610f4107193cb544f3c9faad.png" 
                  alt="와우전사나염" 
                  className="h-20"
                />
              </h4>
              <p className="text-white text-sm leading-relaxed">
                신당동 최고의 실력을 갖춘<br />
                전사 & 나염 전문 업체
              </p>
              <div className="flex gap-3 mt-4">
                <a href="https://blog.naver.com/wow9888" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-teal-500 transition-colors cursor-pointer">
                  <i className="ri-article-line"></i>
                </a>
                <a href="https://pf.kakao.com/_xfAxjxhs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-teal-500 transition-colors cursor-pointer">
                  <i className="ri-kakao-talk-fill"></i>
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-white">서비스</h5>
              <ul className="space-y-2 text-white text-sm">
                <li><a href="/print-method" className="hover:text-teal-400 cursor-pointer">프린트 방식</a></li>
                <li><a href="/about" className="hover:text-teal-400 cursor-pointer">회사소개</a></li>
                <li><a href="https://blog.naver.com/wow9888" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 cursor-pointer">작업후기</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-white">상담 안내</h5>
              <ul className="space-y-2 text-white text-sm">
                <li>전화: 02-2234-9808</li>
                <li>휴대폰: 010-3369-9808</li>
                <li>휴대폰: 010-2911-9808</li>
                <li>카카오톡: wow9808</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-white">위치</h5>
              <ul className="space-y-2 text-white text-sm">
                <li>서울특별시 중구</li>
                <li>청구로10길 34-6 지층</li>
                <li className="mt-3 text-white">청구역 도보 5분</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-white text-sm">
            <p>© Since 2013 와우전사나염. All rights reserved. 사업자등록번호: 558-13-01134</p>
          </div>
        </div>
      </footer>
    </div>
  );
}