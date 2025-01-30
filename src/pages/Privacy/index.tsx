import React from "react";

const Privacy = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-10 justify-center items-center mb-16 mt-10">
        <span className="text-xl mb-2 font-bold">Occasion Craft</span>
        <span className="text-xl mb-6 font-bold">Privacy Policy</span>
        <span>
          This Privacy Policy outlines how we collect, use, disclose, and
          protect your personal information when you use our platform. We are
          committed to safeguarding your privacy and handling your data
          responsibly.
        </span>
        <div className="my-3 flex flex-col">
          <span className="text-base underline mb-2 font-semibold">
            Information We Collect
          </span>
          <span>
            We may collect personal information from you when you create an
            account, make purchases, or use our services. This information may
            include but not limited to:
          </span>
          <div className="ml-4 mt-2">
            <span>
              - <span className="font-semibold">Personal Information:</span>{" "}
              Name, email address, phone number, Date of Birth and other contact
              details.
            </span>
            <span className="mt-2">
              - <span className="font-semibold">Event Data:</span> Event
              information (e.g., location, time, guests and date)
            </span>
            <span className="mt-2">
              - <span className="font-semibold">Device Information:</span>{" "}
              Device type, operating system, and unique device identifiers.
            </span>
            <span className="mt-2">
              - <span className="font-semibold">Usage Data:</span> We may also
              collect Information about how you use our platform, including your
              activities, preferences, and interactions.
            </span>
          </div>
        </div>

        <div className="my-3 flex flex-col">
          <span className="text-base underline mb-2 font-semibold">
            How We Use Your Information
          </span>
          <span>We use your information to:</span>
          <div className="ml-4">
            <span className="font-semibold">
              - Create and manage your account.
            </span>
            <span className="font-semibold">
              - Communicate with you regarding your account and services.
            </span>
            <span className="font-semibold">
              - Improve our platform and services.
            </span>
            <span className="font-semibold">
              - Prevent fraud and protect the security of our platform.
            </span>
            <span className="font-semibold">
              - Comply with legal and regulatory requirements.
            </span>
          </div>
        </div>

        <div className="my-3 flex flex-col">
          <span className="text-base underline mb-2 font-semibold">
            Data Sharing
          </span>
          <span>
            We may share your personal information with third-party service
            providers who assist us in operating our business and providing
            services to you. We do not sell, trade, or rent your personal
            information to third parties for marketing purposes.
          </span>
        </div>

        <div className="my-3 flex flex-col">
          <span className="text-base underline mb-2 font-semibold">
            Data Security
          </span>
          <span>
            We implement reasonable security measures to protect your personal
            information from unauthorized access, disclosure, alteration, or
            destruction. However, no method of transmission or storage is
            completely secure, and we cannot guarantee absolute security.
          </span>
        </div>

        <div className="my-3 flex flex-col">
          <span className="text-base underline mb-2 font-semibold">
            Your Rights
          </span>
          <span>
            You have the right to access and correct your personal information.
            You can also request to restrict or object to the processing of your
            data. To exercise these rights, please contact us using the
            information provided below.
          </span>
        </div>

        <div className="my-3 flex flex-col">
          <span className="text-base underline mb-2 font-semibold">
            Children's Privacy
          </span>
          <span>
            Our platform is not intended for use by children under the age of
            13. We do not knowingly collect personal information from children.
            If you believe we have collected information from a child, please
            contact us immediately so we can take appropriate action.
          </span>
        </div>
        <div className="my-3 flex flex-col">
          <span className="text-base underline mb-2 font-semibold">
            Changes to This Privacy Policy
          </span>
          <span>
            We reserve the right to modify this Privacy Policy at any time. We
            may or may not notify you of any material changes by posting the
            updated policy on our website.
          </span>
        </div>

        <div className="my-3 flex flex-col">
          <span className="text-base underline mb-2 font-semibold">
            Contact Us
          </span>
          <span>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at
          </span>
        </div>

        <div className="my-3 flex flex-col">
          <span>
            By using our platform, you acknowledge and agree to the terms of
            this Privacy Policy.
          </span>
        </div>

        <span className="text-xs text-orange-400 underline">
          Copyright © 2024 Occassion Craft. All rights reserved.
        </span>
      </div>
    </div>
  );
};

export default Privacy;
