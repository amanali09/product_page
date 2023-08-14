import { classNames } from "utils/Function";
import Image from "next/image";

const Color = ({ detail, form, handleForm }) => (
  <>
    <div className="flex gap-2 uppercase mt-6">
      <span className="font-bold">Color</span>
      <span>Conchiglia</span>
    </div>
    <div>
      <div className="flex flex-wrap gap-2 mt-3">
        {detail.colors.map((item, i) => (
          <button
            key={i}
            onClick={() => handleForm("color", item.id)}
            className={classNames(
              "border p-1",
              form.color === item.id ? "border-gray-800" : "border-gray-300"
            )}
          >
            <Image
              sizes="100vw"
              fill
              src={item.icon}
              alt=""
              title={item.name}
              className="!relative !w-14"
            />
          </button>
        ))}
      </div>
    </div>
  </>
);
export default Color;
