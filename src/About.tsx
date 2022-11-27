import React from 'react'
import Image from 'next/image'
import aboutImg from '@public/about.png'

export interface AboutProps {}

const About = ({}: AboutProps) => {
  return (
    <div className="bg-black pt-[8.25rem]">
      <div className="mx-auto max-w-[64rem] pt-20 pb-56">
        <div>
          <Image src={aboutImg} width={1024} height={374} alt="" placeholder="blur" />
        </div>
        <div className="relative mt-[15rem] space-y-[23.75rem] pl-[20.125rem] text-3xl">
          <section>
            <h2 className="absolute left-0 text-4xl underline">ABOUT</h2>
            <div className="space-y-20">
              <p>
                제주도 제주시에 위치한 도깨비공원은 2005년 개장하여 10년간 운영을 하고 지금은 폐업
                상태에 접어든 조형 공원입니다. 제주도 1세대 테마파크로서 개관 때부터 큰 화제를
                모았습니다. 6천여 평의 대지 위에 만여 그루의 나무를 심고 천여 점의 조형물을 직접
                만들어 설치하였습니다. 1998년에 시작하여 8년에 걸친 계획 끝에 문을 열었지만 2년 뒤
                대장도깨비 이기후 교수의 갑작스러운 죽음으로 공원 운영에 어려움을 겪게 됩니다.
              </p>
              <p>
                현재 공원 부지는 부동산 매물로 나와있는 상태이며, 조형물은 도깨비 공원 판매 후
                철거될 예정입니다. 곧 영원히 사라질 도깨비 공원을 온라인 환경에 맞게 재건축하여
                체험형 아카이브를 구축하였습니다. 도깨비 공원을 온라인상에 구현하여 실재하는 공간이
                사라지더라도 오랜 시간 기억하고 더 많은 사람들이 물리적 한계 없이 즐길 수 있도록
                하였습니다.
              </p>
              <p>
                도깨비공원을 다양한 각도에서 이해할 수 있도록 구성한 아카이브와 실재 조형공원의
                공간을 맵의 형태로 재구성한 맵 아카이브까지, 이를 통해 사라지는 대형 공간이 웹을
                통해 재건축되어 사람들이 공간 자체를 기억하고 지속적으로 이용할 수 있도록 하는 것이
                이 프로젝트의 목표입니다.
              </p>
            </div>
          </section>
          <section className="text-2xl">
            <h2 className="absolute left-0 text-4xl underline">CREDIT</h2>
            <ul className="space-y-3">
              <li>이해강: 총괄 기획 및 진행, 일러스트, 애니메이션</li>
              <li>김유리: 기획, 아키비스트</li>
              <li>강재석: 소프트웨어 엔지니어</li>
              <li>강지훈 (baechu): 2022 조형물 아카이브 사진</li>
              <li>한유원(Ownderstand Film): 2022 프로젝트 기록 영상</li>
              <li>이준호: 2022 프로젝트 기록 영상 보조</li>
              <li>앤드류: 2022 프로젝트 기록 드론 영상</li>
              <li>조경욱: 애니메이션 보조</li>
              <li>레벨나인: &lt;느영나영&gt; 기획 및 개발</li>
              <li>나인픽스튜디오: 웹 아카이브 페이지 디자인</li>
              <li>수민(SUMIN): 음악 감독</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
