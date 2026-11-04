import { Plus, Minus, LayoutTemplate, ArrowUpRight } from "lucide-react";
import useService from "../../../hooks/useService";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

import ServicesSkeleton from "../../skeletons/ServicesSkeleton.jsx";
import Button from "../../button/Button.jsx";
import "./services.scss";
import StateEmpty from "../../../utils/StateEmpty.jsx";

const Services = () => {
  const items = useService();
  const [activeIndex, setActiveIndex] = useState(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setActiveIndex(null);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section className="services section" id="services">
      <div className="services__container container grid">
        <div className="section__badge">
          <h3 className="badge__text">02/Apa yang kami tawarkan</h3>
          <div className="badge__line"></div>
        </div>

        <div className="services__content">
          <h2 className="section__title">
            Desain dengan alasan, <span>Coding dengan tujuan.</span>
          </h2>
        </div>

        <div className="services__menu" ref={menuRef}>
          {items.isLoading ? (
            <ServicesSkeleton />
          ) : items.isError ? (
            <StateEmpty icon={<LayoutTemplate />} />
          ) : items.data?.length === 0 ? (
            <div></div>
          ) : (
            items.data?.map((item, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  className={`services__menu-item${isOpen ? " active" : ""}`}
                  key={item.service_id}
                >
                  <button
                    className="services__menu-header"
                    aria-expanded={isOpen}
                    onClick={() => setActiveIndex(isOpen ? null : index)}
                  >
                    <h4>{item.name}</h4>
                    {isOpen ? (
                      <Minus nonScalingStroke size={16} strokeWidth={1} />
                    ) : (
                      <Plus nonScalingStroke size={16} strokeWidth={1} />
                    )}
                  </button>

                  <div
                    className="services__menu-body"
                    ref={(el) => {
                      if (el && isOpen) {
                        el.style.maxHeight = `${el.scrollHeight}px`;
                      }
                    }}
                    style={{
                      maxHeight: isOpen ? undefined : "0px",
                      overflow: "hidden",
                    }}
                  >
                    {item.description}

                    <Button
                      to="/pricing"
                      size="sm"
                      icon={<ArrowUpRight />}
                      justify="left"
                    >
                      Detail
                    </Button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
