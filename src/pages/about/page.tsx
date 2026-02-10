const AboutPage = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
                <a href="/about" className="text-teal-500 hover:text-teal-600 transition-colors cursor-pointer">회사소개</a>
                <a href="/print-method" className="text-gray-700 hover:text-teal-500 transition-colors cursor-pointer">프린트방식</a>
                <a href="https://blog.naver.com/wow9888" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-teal-500 transition-colors cursor-pointer">작업후기</a>
                <a href="https://pf.kakao.com/_xfAxjxhs" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-teal-500 transition-colors cursor-pointer">카톡문의</a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Title Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                와우전사&나염을 소개합니다!
              </h2>
            </div>

            {/* Intro Section */}
            <div className="text-center mb-16 space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed">
                오랜 시간 업계에서 인정받아 온 와우전사는<br />
                고객님들과 신뢰를 늘 최우선으로 생각합니다.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                단 한 번의 작업에도 최선을 다하고,<br />
                다시 한 번 찾아오실 수 있는 좋은 퀄리티를 자랑합니다.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                오랜 노하우가 있는 와우전사에서는<br />
                <strong>DTF 전사, 나염, 필름 컷팅</strong> 등<br />
                다양한 의류, 모자, 에코백 등 다양한 품목들에 작업이 가능합니다.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                협력을 맺은 업체를 다수 보유 중이며<br />
                공장 직영 최저가로 제품을 제공해드립니다.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                와우전사를 믿고 찾아주시는 고객님들께<br />
                감사함과 동시에 책임감을 갖고<br />
                최고의 결과로 보여드리도록 최선을 다하겠습니다.
              </p>
            </div>

            <hr className="my-12 border-gray-300" />

            {/* Content Sections */}
            <div className="space-y-12">
              {/* Section 1 */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  1. 하청 없는 공장 직영, 합리적인 가격의 비밀
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  많은 업체가 주문만 받고 실제 제작은 외부 공장에 맡기는 '하청' 방식을 취하곤 합니다.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  하지만 와우전사는 <strong>하청을 절대 주지 않는 제조 공장 직접 운영</strong> 시스템입니다.
                </p>
                <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 ml-4">
                  <li>
                    <strong>거품 없는 최저가</strong>: 중간 마진이 발생하지 않아 고객님들께 공장 직영 최저가로 제품을 제공해 드립니다.
                  </li>
                  <li>
                    <strong>철저한 품질 관리</strong>: 내 옷을 만든다는 책임감으로 모든 공정을 직접 눈으로 확인하며 검수하기에 뛰어난 품질을 보장합니다.
                  </li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  2. 신당동 최고의 기술력, DTF 전사 기법의 정점
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  와우전사는 <strong>DTF 전사, 나염, 필름 컷팅</strong> 등 전사 분야에서 국내 최고의 기술력을 가진 전문 인력들로 구성되어 있습니다.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  특히 최근 각광받는 DTF 전사 기법은 저희의 전공 분야입니다.
                </p>
                <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 ml-4">
                  <li>
                    <strong>압도적인 디테일</strong>: 복잡한 캐릭터의 표정이나 미세한 그라데이션까지 필름에 선명하게 출력하여 의류에 그대로 옮겨 담습니다.
                  </li>
                  <li>
                    <strong>다양한 품목 작업</strong>: 후드티, 패딩, 티셔츠는 물론 모자, 에코백 등 로고가 들어가는 모든 품목에 완벽한 작업이 가능합니다.
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-900">
                  3. 노하우가 만든 효율적인 생산 시스템
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  오랜 시간 업계에서 인정받아 온 와우전사만의 노하우는 '빠르고 정확한 생산'에서 나옵니다.
                </p>
                <ul className="list-disc list-inside space-y-3 text-lg text-gray-700 ml-4">
                  <li>
                    <strong>숙련된 전문 인력</strong>: 각 분야의 베테랑들이 팀을 이뤄 가장 효율적인 방식으로 작업을 진행합니다.
                  </li>
                  <li>
                    <strong>체계적인 시스템</strong>: 탄탄한 시스템을 갖추고 있어 대량 주문도 납기일을 철저히 지키며 신속하게 생산합니다.
                  </li>
                </ul>
              </div>
            </div>

            <hr className="my-12 border-gray-300" />

            {/* Quote Section */}
            <div className="text-center space-y-8 my-16">
              <h3 className="text-3xl font-bold text-gray-900">
                "최고의 결과물이 저희가 드릴 수 있는 최선의 보답입니다"
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                와우전사를 믿고 소중한 결과물을 맡겨주시는 고객님들께 늘 감사함과 동시에 막중한 책임감을 느낍니다.<br />
                단순히 옷에 로고를 찍는 것을 넘어,<br />
                여러분의 팀워크와 가치를 선명하게 새겨드리는 파트너가 되겠습니다.
              </p>
              <p className="text-xl text-gray-700 leading-relaxed">
                합리적인 가격과 높은 퀄리티의 작업물로 <strong>신당동 최고의 기술력</strong>을 보여드리겠습니다.<br />
                단체복, 굿즈 제작 고민 중이시라면 고민하지 마시고 <strong>와우전사</strong>로 문의주세요!
              </p>
            </div>

            <hr className="my-12 border-gray-300" />

            {/* Contact Section */}
            <div className="text-center space-y-8 my-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                와우전사 상담 및 견적 안내
              </h3>
              <div className="space-y-4 text-xl text-gray-700">
                <p>
                  <strong>상담 가능 품목</strong>: 의류, 모자, 에코백 등 전 품목 로고 작업
                </p>
                <p>
                  <strong>주요 기법</strong>: DTF 전사, 나염, 필름 컷팅등
                </p>
              </div>
              <div className="space-y-3 text-2xl font-bold text-gray-900 mt-8">
                <p>전화번호 : 02.2234.9808                010.3369.9808                010.2911.9808</p>
                <p>카카오톡ID : wow9888</p>
                <p>이메일 : wow9888@naver.com</p>
              </div>
            </div>

            {/* Map Section */}
            <div className="my-16">
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://map.naver.com/p/search/와우전사나염/place/1072311878?c=15.00,0,0,0,dh&isCorrectAnswer=true"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="와우전사나염 위치"
                ></iframe>
              </div>
              <div className="text-center mt-12">
                <p className="text-5xl font-bold text-gray-900 mb-6">와우전사나염</p>
                <p className="text-4xl text-gray-600 font-semibold mb-4">서울특별시 중구 청구로10길 34-6 지층</p>
                <p className="text-4xl text-gray-600 font-semibold">02-2234-9808</p>
              </div>
              <p className="text-center text-6xl font-bold text-gray-900 mt-16">
                와우전사는 청구역에서 도보 5분 거리에 위치하고 있습니다.
              </p>
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
                  alt="와우전사나염" 
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

export default AboutPage;
