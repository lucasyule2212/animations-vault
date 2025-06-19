import { Card } from "../ui/card";

const CardHover = () => {
  return (
    <Card className="relative flex min-h-[530px] w-full min-w-[350px] flex-col items-center justify-center gap-12 bg-white p-6">
      <a
        href="#card-hover"
        id="card-hover"
        className="group mx-auto flex h-[340px] w-[340px] items-end overflow-hidden rounded-2xl bg-card-foreground no-underline shadow-[0px_0px_0px_1px_rgba(9,9,11,0.08),_0px_1px_2px_-1px_rgba(9,9,11,0.08),_0px_2px_4px_0px_rgba(9,9,11,0.04)]"
      >
        <div className="relative m-[6px] w-full origin-bottom translate-y-[120%] rounded-xl border border-white bg-white px-[14px] pb-[13px] pt-[10px] text-[13px] opacity-0 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.08),_0px_1px_2px_-1px_rgba(0,0,0,0.08),_0px_2px_4px_0px_rgba(0,0,0,0.04)] transition-all duration-500 ease-out-expo group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
          <h3 className="font-medium text-primary-foreground">Animations Vault</h3>
          <p className="mt-1 leading-none text-muted-foreground">A curated collection of smooth UI animations</p>
          <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            fill="none"
            className="absolute right-4 top-4"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.33333 0.4375C6.33333 0.195877 6.52922 0 6.77083 0H10.5625C10.8041 0 11 0.195877 11 0.4375V4.22917C11 4.47078 10.8041 4.66667 10.5625 4.66667C10.3209 4.66667 10.125 4.47078 10.125 4.22917V1.49372L7.08017 4.53851C6.90932 4.70937 6.63235 4.70937 6.46149 4.53851C6.29063 4.36765 6.29063 4.09068 6.46149 3.91981L9.50626 0.875H6.77083C6.52922 0.875 6.33333 0.679122 6.33333 0.4375ZM0.5 6.27083C0.5 6.02922 0.695877 5.83333 0.9375 5.83333C1.17912 5.83333 1.375 6.02922 1.375 6.27083V9.00626L4.41981 5.96149C4.59068 5.79063 4.86765 5.79063 5.03851 5.96149C5.20937 6.13235 5.20937 6.40932 5.03851 6.58017L1.99372 9.625H4.72917C4.97078 9.625 5.16667 9.82088 5.16667 10.0625C5.16667 10.3041 4.97078 10.5 4.72917 10.5H0.9375C0.695877 10.5 0.5 10.3041 0.5 10.0625V6.27083Z"
              fill="#58585F"
            />
          </svg>
        </div>
      </a>
    </Card>
  );
}

export default CardHover