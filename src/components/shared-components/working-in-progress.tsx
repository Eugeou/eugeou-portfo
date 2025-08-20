import { Modal } from "antd";
import TwinkleStar from "./react-flow/components/image-node/twinkle-star";

type Props = {
  open: boolean;
  onClose: () => void;
};

export const WIPModal = ({ open, onClose }: Props) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      className="text-center"
      centered
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center py-4">
          <div className="mb-1">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-yellow-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
            🚧 My Portfolio Under Construction 🚧
          </h1>

          <p className="text-gray-600 mb-3 max-w-md text-sm md:text-base">
            I&apos;m currently rebuilding my portfolio with the latest technologies
            and a fresh design to better showcase my work and skills.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-5 w-[100%] max-w-md text-sm md:text-base">
            <p className="text-sm text-blue-800">
              <strong>What&apos;s coming:</strong>
              <ol className="list-disc list-inside">
                <li>Some Modern and exciting UI/UX</li>
                <li>Responsive design (Of course :D)</li>
                <li>Improved my website performance</li>
                <li>Better project showcases</li>
                <li>Enhanced user experience</li>
                <li>And more...</li>
              </ol>
            </p>
          </div>

          <p className="text-gray-500 text-sm text-center">
            Thanks for your patience! The new version will be worth the wait. 🎉
            <br />
            You also can enter to check my progress.
          </p>

          <div className="mt-4 mb-1 text-xs text-gray-400">
            <p>Expected completion: Soon hihihi™</p>
          </div>
        </div>
        <div className="w-full h-1 flex justify-end items-center">
          <TwinkleStar
            currentColor="#ff8c00"
            position="relative"
            rotation="horizontal"
          />
        </div>
      </div>
    </Modal>
  );
};
