import clsx from "clsx";
import Link from "next/link";

// ==============================================================
interface DownloadListProps {
  no: string;
  title: string;
  subtitle: string;
  shadow?: boolean;
  className: string;
}
// ==============================================================

export default function ProcessList1({ no, title, subtitle, className, shadow }: DownloadListProps) {
  return (
    <Link href="/rekrutacja">
      <div
        className={clsx({
          card: true,
          "shadow-lg": shadow,
          [className]: Boolean(className)
        })}>
        <div className="card-body p-6">
          <div className="d-flex flex-row">
            <div>
              <span className="icon btn btn-circle btn-lg btn-soft-primary pe-none me-4">
                <span className="number"><i className="uil uil-file-download fs-40"></i></span>
              </span>
            </div>

            <div>
              <h4 className="mb-1">{title}</h4>
              <p className="mb-0">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
