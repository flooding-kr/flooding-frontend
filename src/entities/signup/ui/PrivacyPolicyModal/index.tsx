'use client';

import React, { useEffect, useRef, useState } from 'react';

import { X } from '@/shared/assets/icons';
import { Button } from '@/shared/ui';
import Portal from '@/shared/ui/Portal';

interface Props {
  onClose: () => void;
  onConfirm: () => void;
}

function PrivacyPolicyModal({ onClose, onConfirm }: Props) {
  const [isConfirmEnabled, setIsConfirmEnabled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleScrollToEnableConfirm = () => {
    const ref = contentRef.current;
    if (ref) {
      const { scrollTop, scrollHeight, clientHeight } = ref;
      const isAtBottom = scrollHeight - clientHeight - scrollTop <= 5;
      if (isAtBottom) {
        setIsConfirmEnabled(true);
      }
    }
  };

  useEffect(() => {
    const ref = contentRef.current;
    setIsOpen(true);
    if (ref) {
      ref.addEventListener('scroll', handleScrollToEnableConfirm);
      handleScrollToEnableConfirm();
    }

    return () => {
      if (ref) {
        ref.removeEventListener('scroll', handleScrollToEnableConfirm);
      }
    };
  }, [isOpen]);

  return (
    <Portal onClose={onClose}>
      <div className="max-w-[730px] bg-white p-5 flex flex-col gap-6 rounded-lg shadow-[0_0_20px_0_#00000033]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3 mobile:gap-2">
            <p className="text-black text-body2B mobile:text-body3B">개인정보 처리 방침</p>
          </div>
          <button className="w-6 h-6" type="button" onClick={onClose}>
            <X />
          </button>
        </div>

        <div
          ref={contentRef}
          className="bg-gray-100 p-5 flex flex-col gap-3 rounded-lg overflow-y-auto max-h-[500px]"
        >
          <p className="text-caption2M text-black">
            본 개인정보 처리방침은 <strong>플러딩(Flooding)</strong>이 제공하는 서비스(이하
            “서비스”)를 이용하는 이용자의 개인정보를 어떻게 수집, 이용, 보관 및 보호하는지에 대해
            설명합니다.
          </p>
          <p className="text-caption2M text-black">
            1. 수집하는 개인정보 항목
            <br />
            플러딩은 서비스 제공을 위해 다음과 같은 개인정보를 수집합니다.
            <br />
            - 이메일
            <br />
            - 이름
            <br />
            - 학번
            <br />- 성별
          </p>
          <p className="text-caption2M text-black">
            2. 개인정보 수집 방법
            <br />
            개인정보는 다음과 같은 방법으로 수집됩니다.
            <br />
            - 회원가입 및 서비스 이용 과정에서 이용자가 직접 입력
            <br />- 고객 문의 과정에서 수집
          </p>
          <p className="text-caption2M text-black">
            3. 개인정보 사용 목적
            <br />
            수집한 개인정보는 다음의 목적을 위해 사용됩니다.
            <br />
            - 서비스 제공 및 이용자 식별
            <br />
            - 공지사항 전달 등 이용자 관리
            <br />- 학교 재학 여부에 따른 자격 확인
          </p>
          <p className="text-caption2M text-black">
            4. 개인정보 보유 및 이용기간
            <br />
            수집한 개인정보는 학교 재학 기간 동안 보유 및 이용됩니다. 재학 기간 종료 또는 회원 탈퇴
            시 지체 없이 파기됩니다. 단, 관련 법령에 따라 보존이 필요한 경우에는 해당 기간 동안
            보관할 수 있습니다.
          </p>
          <p className="text-caption2M text-black">
            5. 개인정보의 제3자 제공
            <br />
            플러딩은 이용자의 개인정보를 제3자에게 제공하지 않습니다. 단, 이용자의 사전 동의가
            있거나 법령에 따라 요구되는 경우에는 예외로 합니다.
          </p>
          <p className="text-caption2M text-black">
            6. 개인정보 보호를 위한 조치
            <br />
            플러딩은 개인정보의 안전한 처리를 위해 다음과 같은 조치를 취하고 있습니다.
            <br />
            - 개인정보 접근 권한 최소화
            <br />
            - 보안 프로그램 설치 및 접근 제어
            <br />- 개인정보 처리 담당자 교육
          </p>
          <p className="text-caption2M text-black">
            7. 이용자의 권리 및 행사 방법
            <br />
            이용자는 자신의 개인정보에 대해 열람, 정정, 삭제, 처리정지 요청을 할 수 있습니다. 해당
            요청은 고객센터 또는 이메일을 통해 접수하실 수 있습니다.
          </p>
          <p className="text-caption2M text-black">
            8. 개인정보 보호책임자
            <br />
            성명: 김동학
            <br />
            연락처: admin@flooding.kr
          </p>
          <p className="text-caption2M text-black">
            9. 기타
            <br />
            본 개인정보 처리방침은 관련 법령 및 서비스 운영 정책에 따라 변경될 수 있으며, 변경 시
            사전에 공지합니다.
            <br />
            공고일: 2025년 5월 20일
            <br />
            시행일: 2025년 5월 20일
          </p>
        </div>

        <div className="flex justify-end">
          <Button text="동의" type="button" onClick={onConfirm} disabled={!isConfirmEnabled} />
        </div>
      </div>
    </Portal>
  );
}

export default PrivacyPolicyModal;
