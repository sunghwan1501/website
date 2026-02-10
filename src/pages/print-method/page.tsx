import React, { useState } from 'react';

const PrintMethodPage = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://readdy.ai/api/form/d5ooh748q3pa76svmtrg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setFormStatus('success');
        form.reset();
        setTimeout(() => {
          setIsQuoteModalOpen(false);
          setFormStatus('idle');
        }, 2000);
      } else {
        setFormStatus('error');
      }
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            <div className="flex items-center gap-2 w-full justify-between md:justify-start">
              <h1 className="flex items-center">
                <a href="/" className="cursor-pointer">
                  <img 
                    src="https://static.readdy.ai/image/1868aa3cdc51206ed6db9b8de57d8990/ee08f51b732653cc943d10fe068cffe3.png" 
                    alt="Sensy92" 
                    className="h-10 md:h-16"
                  />
                </a>
              </h1>
              <nav className="flex items-center gap-2 md:gap-6 text-xs md:text-base">
                <a href="/" className="text-gray-700 hover:text-teal-500 transition-colors cursor-pointer">홈</a>
                <a href="/about" className="text-gray-700 hover:text-teal-500 transition-colors cursor-pointer">회사소개</a>
                <a href="/print-method" className="text-teal-500 hover:text-teal-600 transition-colors cursor-pointer">프린트방식</a>
                <a href="https://blog.naver.com/wow9888" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-teal-500 transition-colors cursor-pointer hidden sm:inline">작업후기</a>
                <a href="https://pf.kakao.com/_xfAxjxhs" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-teal-500 transition-colors cursor-pointer hidden sm:inline">카톡문의</a>
                <button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-teal-500 text-white px-2 py-1 md:px-4 md:py-2 rounded-lg hover:bg-teal-600 transition-colors cursor-pointer whitespace-nowrap"
                >
                  견적문의
                </button>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Quote Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
              <h3 className="text-2xl font-bold text-gray-900">견적 문의</h3>
              <button
                onClick={() => setIsQuoteModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>

            <form 
              id="quote-form"
              data-readdy-form
              onSubmit={handleQuoteSubmit}
              className="p-6 space-y-5"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  이름 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="이름을 입력해주세요"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  이메일 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  연락처 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="010-0000-0000"
                />
              </div>

              <div>
                <label htmlFor="print-type" className="block text-sm font-medium text-gray-700 mb-2">
                  프린트 방식 <span className="text-red-500">*</span>
                </label>
                <select
                  id="print-type"
                  name="print-type"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="">선택해주세요</option>
                  <option value="실사전사">실사전사</option>
                  <option value="DTF전사">DTF전사</option>
                  <option value="나염1도">나염1도</option>
                  <option value="나염2도 이상">나염2도 이상</option>
                </select>
              </div>

              <div>
                <label htmlFor="print-position" className="block text-sm font-medium text-gray-700 mb-2">
                  인쇄위치 <span className="text-red-500">*</span>
                </label>
                <select
                  id="print-position"
                  name="print-position"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="">선택해주세요</option>
                  <option value="앞">앞</option>
                  <option value="뒤">뒤</option>
                  <option value="왼가슴">왼가슴</option>
                  <option value="소매">소매</option>
                  <option value="목 뒤">목 뒤</option>
                  <option value="기타">기타</option>
                </select>
              </div>

              <div>
                <label htmlFor="print-size" className="block text-sm font-medium text-gray-700 mb-2">
                  인쇄 사이즈 <span className="text-red-500">*</span>
                </label>
                <select
                  id="print-size"
                  name="print-size"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all cursor-pointer"
                >
                  <option value="">선택해주세요</option>
                  <option value="10cm미만">10cm미만</option>
                  <option value="A4(21×29cm) 이내">A4(21×29cm) 이내</option>
                  <option value="A3(28×40cm) 이내">A3(28×40cm) 이내</option>
                  <option value="특대">특대</option>
                </select>
              </div>

              <div>
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                  수량 <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  required
                  min="1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="수량을 입력해주세요"
                />
              </div>

              <div>
                <label htmlFor="product-type" className="block text-sm font-medium text-gray-700 mb-2">
                  제품 종류
                </label>
                <input
                  type="text"
                  id="product-type"
                  name="product-type"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  placeholder="예: 티셔츠, 후드티, 맨투맨, 에코백 등"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  상세 내용 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  maxLength={500}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-none"
                  placeholder="디자인 크기, 색상, 원하시는 작업 내용 등을 자세히 적어주세요 (최대 500자)"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">최대 500자까지 입력 가능합니다</p>
              </div>

              {formStatus === 'success' && (
                <div className="bg-teal-50 border border-teal-200 text-teal-700 px-4 py-3 rounded-lg">
                  <i className="ri-check-line mr-2"></i>
                  견적 문의가 성공적으로 접수되었습니다!
                </div>
              )}

              {formStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  <i className="ri-error-warning-line mr-2"></i>
                  전송 중 오류가 발생했습니다. 다시 시도해주세요.
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setIsQuoteModalOpen(false)}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer whitespace-nowrap"
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="flex-1 px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === 'submitting' ? '전송 중...' : '견적 문의하기'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Title Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                프린트 방식 안내
              </h2>
              <p className="text-xl text-gray-600">
                와우전사의 다양한 프린트 기법을 소개합니다
              </p>
            </div>

            {/* DTF 전사 */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="w-full h-96">
                  <img 
                    src="https://static.readdy.ai/image/1868aa3cdc51206ed6db9b8de57d8990/cddb1732d621b8b35facd3cf2ae85fa2.png"
                    alt="DTF 전사"
                    className="w-full h-full object-cover object-top rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">DTF 전사</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>Direct To Film</strong>의 약자로, 최신 디지털 사용 기술입니다. 특수필름 원단에 디자인을 출력한 후 열과 압력을 가해서 의류 및 원단에 압착하는 방식입니다.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center text-teal-500 mt-1">
                        <i className="ri-check-line text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">뛰어난 색상 표현력</h4>
                        <p className="text-gray-600">복잡한 그라데이션과 미세한 디테일까지 선명하게 표현</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center text-teal-500 mt-1">
                        <i className="ri-check-line text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">다양한 원단 적용</h4>
                        <p className="text-gray-600">면, 폴리에스터, 혼방 등 거의 모든 원단에 작업 가능</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center text-teal-500 mt-1">
                        <i className="ri-check-line text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">우수한 내구성</h4>
                        <p className="text-gray-600">세탁 후에도 색상과 품질이 오래 유지됩니다</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center text-teal-500 mt-1">
                        <i className="ri-check-line text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">소량 제작 가능</h4>
                        <p className="text-gray-600">1장부터 대량까지 합리적인 가격으로 제작</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-teal-50 p-6 rounded-xl">
                    <p className="text-sm text-gray-700">
                      <strong className="text-teal-600">추천 품목:</strong> 티셔츠, 후드티, 맨투맨, 에코백 등
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-16 border-gray-300" />

            {/* 나염 */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 order-2 md:order-1">
                  <h3 className="text-3xl font-bold text-gray-900">나염 (고무나염)</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    전사와는 다른 방식으로 스크린 판을 제작하여 잉크를 직접 원단에 칠하는 방식입니다. 대량 생산에 적합하고 컬러 도수에 따라 단가가 달라지는 것이 특징입니다. 또한 색이 직접 원단에 올라가 도톰한 두께감이 있습니다.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center text-teal-500 mt-1">
                        <i className="ri-check-line text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">선명한 발색</h4>
                        <p className="text-gray-600">잉크를 손으로 직접 조색하여 색상이 표현이 섬세하고 원단에 올라갔을때 발색이 진합니다.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center text-teal-500 mt-1">
                        <i className="ri-check-line text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">대량 생산 최적화</h4>
                        <p className="text-gray-600">수량이 많아질수록 단가가 낮아집니다.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center text-teal-500 mt-1">
                        <i className="ri-check-line text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">뛰어난 내구성</h4>
                        <p className="text-gray-600">세탁후에도 변형없이 사용할 수 있습니다</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center text-teal-500 mt-1">
                        <i className="ri-check-line text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">특수 효과 가능</h4>
                        <p className="text-gray-600">금분, 은분등의 다양한 특수 잉크가 사용 가능합니다.</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-teal-50 p-6 rounded-xl">
                    <p className="text-sm text-gray-700">
                      <strong className="text-teal-600">추천 품목:</strong> 단체복, 유니폼, 행사 티셔츠 등 대량 주문
                    </p>
                  </div>
                </div>
                <div className="w-full h-96 order-1 md:order-2">
                  <img 
                    src="https://readdy.ai/api/search-image?query=silk%20screen%20printing%20process%20on%20fabric%20showing%20ink%20application%20through%20mesh%20screen%20vibrant%20colors%20professional%20photography%20clean%20white%20background%20studio%20lighting%20detailed%20texture&width=600&height=600&seq=screen-print-method&orientation=squarish"
                    alt="나염"
                    className="w-full h-full object-cover object-top rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>

            <hr className="my-16 border-gray-300" />

            {/* 필름 컷팅 */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="w-full h-96">
                  <img 
                    src="https://readdy.ai/api/search-image?query=vinyl%20heat%20transfer%20film%20cutting%20process%20showing%20colorful%20cut%20designs%20on%20fabric%20professional%20photography%20clean%20white%20background%20studio%20lighting%20sharp%20details&width=600&height=600&seq=vinyl-cut-method&orientation=squarish"
                    alt="필름 컷팅"
                    className="w-full h-full object-cover object-top rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">필름 컷팅 (열전사 (PU커팅))</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    컬러 필름을 원하는 모양으로 재단한 후 열과 프레스로 의류 및 원단에 압착하는 방식입니다. 3M 반사나 형광등 특수의류의 작업물에 적합합니다.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center text-teal-500 mt-1">
                        <i className="ri-check-line text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">깔끔한 마감</h4>
                        <p className="text-gray-600">단색 로고나 텍스트를 선명하고 깔끔하게 표현</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center text-teal-500 mt-1">
                        <i className="ri-check-line text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">빠른 작업</h4>
                        <p className="text-gray-600">간단한 디자인은 신속하게 제작 가능</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center text-teal-500 mt-1">
                        <i className="ri-check-line text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">다양한 컬러</h4>
                        <p className="text-gray-600">메탈릭, 형광, 반사 등 특수 필름 사용 가능</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 flex items-center justify-center text-teal-500 mt-1">
                        <i className="ri-check-line text-xl"></i>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">소량 제작 적합</h4>
                        <p className="text-gray-600">1~2장 소량 제작도 합리적인 가격</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-teal-50 p-6 rounded-xl">
                    <p className="text-sm text-gray-700">
                      <strong className="text-teal-600">추천 품목:</strong> 유니폼 네임, 번호, 단색 로고 작업
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="my-16 border-gray-300" />

            {/* 비교표 */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">프린트 방식 비교</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-6 py-4 text-left font-semibold text-gray-900">구분</th>
                      <th className="border border-gray-300 px-6 py-4 text-center font-semibold text-gray-900">DTF 전사</th>
                      <th className="border border-gray-300 px-6 py-4 text-center font-semibold text-gray-900">나염</th>
                      <th className="border border-gray-300 px-6 py-4 text-center font-semibold text-gray-900">필름 컷팅</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">색상 표현</td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-gray-700">풀컬러 가능</td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-gray-700">다색 가능</td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-gray-700">단색</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">최소 수량</td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-gray-700">1장부터</td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-gray-700">30장 이상 권장</td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-gray-700">1장부터</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">작업 시간</td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-gray-700">빠름</td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-gray-700">보통</td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-gray-700">매우 빠름</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">내구성</td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-gray-700">우수</td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-gray-700">매우 우수</td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-gray-700">우수</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">가격 (소량)</td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-gray-700">합리적</td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-gray-700">높음</td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-gray-700">저렴</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 px-6 py-4 font-medium text-gray-900">가격 (대량)</td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-gray-700">합리적</td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-gray-700">매우 저렴</td>
                      <td className="border border-gray-300 px-6 py-4 text-center text-gray-700">보통</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">의류 구매부터 인쇄까지 최적의 솔루션을 제안해드립니다</h3>
              <p className="text-xl mb-8 text-white/90">
                번거로운 과정없이 간편하게 작업하기 와우전사와 상담해보세요!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:02-2234-9808" className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-full hover:bg-gray-100 transition-colors cursor-pointer whitespace-nowrap inline-block">
                  <i className="ri-phone-line mr-2"></i>
                  전화 상담하기
                </a>
                <a href="https://pf.kakao.com/_xfAxjxhs" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-300 transition-colors cursor-pointer whitespace-nowrap inline-block">
                  <i className="ri-kakao-talk-fill mr-2"></i>
                  카카오톡 문의
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h4 className="mb-4">
                <img 
                  src="https://i.imgur.com/CDJYwUP.png" 
                  alt="Sensy92" 
                  className="h-8"
                />
              </h4>
              <p className="text-white text-sm leading-relaxed">
                신당동 최고의 기술력을 자랑하는<br />
                전사 및 나염 전문 업체
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
            <p>© 2024 와우전사나염. All rights reserved.</p>
            <p className="mt-2">
              <a href="https://readdy.ai/?ref=logo" className="hover:text-teal-400 cursor-pointer">Powered by Readdy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrintMethodPage;
