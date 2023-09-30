import clsx from "clsx";

export function Logo({
  variant,
}: {
  variant: "wordmark" | "base" | "responsive" | "error" | "plain" | "outline";
}) {
  return (
    <>
      <svg
        className={clsx(
          variant === "base"
            ? "hidden"
            : variant === "wordmark"
            ? "block"
            : variant === "responsive"
            ? "hidden md:block"
            : "hidden",
        )}
        width=""
        height=""
        viewBox="0 0 732 248"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M196.93 182C195.455 182 194.349 181.737 193.612 181.21C192.98 180.683 192.348 179.63 191.716 178.05L150.636 78.984C150.32 78.352 150.162 77.72 150.162 77.088C150.162 76.3507 150.373 75.7713 150.794 75.35C151.321 74.8233 152.005 74.56 152.848 74.56H166.436C167.805 74.56 168.859 74.8233 169.596 75.35C170.333 75.8767 170.913 76.7193 171.334 77.878L201.196 153.718L231.058 77.878C231.479 76.7193 232.059 75.8767 232.796 75.35C233.533 74.8233 234.587 74.56 235.956 74.56H249.544C250.387 74.56 251.019 74.8233 251.44 75.35C251.967 75.7713 252.23 76.3507 252.23 77.088C252.23 77.72 252.072 78.352 251.756 78.984L210.834 178.05C210.202 179.63 209.517 180.683 208.78 181.21C208.043 181.737 206.937 182 205.462 182H196.93ZM291.914 184.37C283.698 184.37 276.272 183.001 269.636 180.262C263 177.418 257.681 173.099 253.678 167.306C249.781 161.407 247.832 154.087 247.832 145.344C247.832 131.756 251.466 121.433 258.734 114.376C266.002 107.319 276.325 103.79 289.702 103.79C302.974 103.79 312.981 107.213 319.722 114.06C326.569 120.907 329.992 130.808 329.992 143.764C329.992 147.451 328.307 149.294 324.936 149.294H266.95C266.95 156.246 269.373 161.618 274.218 165.41C279.063 169.097 285.805 170.94 294.442 170.94C302.763 170.94 310.242 169.044 316.878 165.252C317.615 164.831 318.195 164.62 318.616 164.62C319.353 164.62 319.933 165.094 320.354 166.042L324.146 172.836C324.462 173.468 324.62 174.047 324.62 174.574C324.62 175.311 324.146 175.996 323.198 176.628C318.879 179.261 314.192 181.21 309.136 182.474C304.185 183.738 298.445 184.37 291.914 184.37ZM311.664 137.602C311.664 131.071 309.821 125.963 306.134 122.276C302.553 118.589 297.128 116.746 289.86 116.746C282.487 116.746 276.799 118.642 272.796 122.434C268.899 126.226 266.95 131.282 266.95 137.602H311.664ZM351.268 182C349.161 182 347.634 181.526 346.686 180.578C345.843 179.63 345.422 178.208 345.422 176.312V80.406C345.422 78.4047 345.843 76.93 346.686 75.982C347.634 75.034 349.161 74.56 351.268 74.56H359.642C361.748 74.56 363.276 75.034 364.224 75.982C365.172 76.93 365.646 78.4047 365.646 80.406V176.312C365.646 178.208 365.172 179.63 364.224 180.578C363.381 181.526 361.854 182 359.642 182H351.268ZM426.016 184.37C396.102 184.37 381.144 170.887 381.144 143.922C381.144 136.022 382.672 129.07 385.726 123.066C388.781 116.957 393.152 112.217 398.84 108.846C404.634 105.475 411.428 103.79 419.222 103.79C430.282 103.79 438.288 106.265 443.238 111.216V80.406C443.238 78.4047 443.712 76.93 444.66 75.982C445.608 75.034 447.136 74.56 449.242 74.56H457.142C459.249 74.56 460.776 75.034 461.724 75.982C462.672 76.93 463.146 78.4047 463.146 80.406V174.1C459.144 177.049 453.772 179.525 447.03 181.526C440.289 183.422 433.284 184.37 426.016 184.37ZM426.49 169.992C433.548 169.992 439.13 168.728 443.238 166.2V133.968C443.238 128.807 441.448 124.909 437.866 122.276C434.285 119.643 429.65 118.326 423.962 118.326C416.273 118.326 410.532 120.643 406.74 125.278C402.948 129.913 401.052 136.285 401.052 144.396C401.052 153.455 403.159 159.985 407.372 163.988C411.586 167.991 417.958 169.992 426.49 169.992ZM519.164 184.37C505.47 184.37 494.884 180.789 487.406 173.626C480.032 166.358 476.346 156.509 476.346 144.08C476.346 131.651 480.032 121.855 487.406 114.692C494.884 107.424 505.47 103.79 519.164 103.79C532.857 103.79 543.443 107.424 550.922 114.692C558.4 121.855 562.14 131.651 562.14 144.08C562.14 156.509 558.4 166.358 550.922 173.626C543.443 180.789 532.857 184.37 519.164 184.37ZM519.164 169.518C526.642 169.518 532.33 167.359 536.228 163.04C540.125 158.721 542.074 152.401 542.074 144.08C542.074 135.864 540.125 129.649 536.228 125.436C532.33 121.117 526.642 118.958 519.164 118.958C511.79 118.958 506.102 121.117 502.1 125.436C498.202 129.649 496.254 135.864 496.254 144.08C496.254 152.296 498.202 158.616 502.1 163.04C506.102 167.359 511.79 169.518 519.164 169.518ZM583.642 182C581.536 182 580.008 181.526 579.06 180.578C578.112 179.63 577.638 178.208 577.638 176.312V110.426C577.638 108.846 577.902 107.74 578.428 107.108C578.955 106.476 580.061 106.16 581.746 106.16H590.752C591.911 106.16 592.754 106.423 593.28 106.95C593.807 107.371 594.123 108.161 594.228 109.32L594.702 115.008C600.917 107.529 609.08 103.79 619.192 103.79C623.827 103.79 627.356 104.58 629.778 106.16C630.41 106.581 630.779 107.055 630.884 107.582C631.095 108.003 631.095 108.53 630.884 109.162L628.04 118.642C627.724 119.695 627.145 120.222 626.302 120.222L625.038 119.906C622.51 118.747 619.614 118.168 616.348 118.168C610.976 118.168 606.552 119.695 603.076 122.75C599.6 125.699 597.862 129.755 597.862 134.916V176.312C597.862 178.208 597.388 179.63 596.44 180.578C595.598 181.526 594.07 182 591.858 182H583.642ZM674.021 184.37C663.698 184.37 655.482 181.263 649.373 175.048C643.264 168.728 640.209 159.88 640.209 148.504C640.209 139.656 642.158 131.861 646.055 125.12C649.952 118.273 655.482 113.007 662.645 109.32C669.913 105.633 678.34 103.79 687.925 103.79C701.302 103.79 712.626 106.95 721.895 113.27V177.734C721.895 179.314 721.526 180.42 720.789 181.052C720.157 181.684 718.998 182 717.313 182H708.623C707.464 182 706.569 181.789 705.937 181.368C705.41 180.841 705.042 180.051 704.831 178.998L703.567 172.836C700.302 176.839 696.246 179.788 691.401 181.684C686.661 183.475 680.868 184.37 674.021 184.37ZM681.605 169.992C687.188 169.992 692.086 168.359 696.299 165.094C700.618 161.829 702.777 157.51 702.777 152.138V121.328C700.565 120.169 698.3 119.379 695.983 118.958C693.771 118.431 691.032 118.168 687.767 118.168C679.446 118.168 672.757 120.801 667.701 126.068C662.645 131.335 660.117 138.603 660.117 147.872C660.117 155.456 661.855 161.039 665.331 164.62C668.912 168.201 674.337 169.992 681.605 169.992Z"
          fill="currentColor"
        />
        <path
          d="M63.1204 129.29L46.6688 158.903L43.9268 163.839L29.7313 138.702L0.366848 81.4368C-0.755896 79.2473 0.834079 76.6451 3.29469 76.6451H88.8946L76.2817 90.3548L60.3784 107.903L40.0881 129.29H63.1204Z"
          fill="currentColor"
        />
        <path
          d="M68.7684 125.325H49.7332L107.222 63.3593L84.3274 112.355L83.6623 113.779H85.2334H108.417L34.3444 187.906L69.6343 126.825L70.5011 125.325H68.7684Z"
          fill="#FDBB30"
          stroke="#FDBB30"
          strokeWidth="2"
        />
      </svg>

      <svg
        className={clsx(
          variant === "base"
            ? "block"
            : variant === "wordmark"
            ? "hidden"
            : variant === "responsive"
            ? "block md:hidden"
            : "hidden",
        )}
        width=""
        height=""
        viewBox="0 0 196 241"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M111.627 126.075L82.5325 178.445L77.6834 187.173L52.579 142.72L0.64876 41.4474C-1.33678 37.5753 1.47505 32.9735 5.82657 32.9735H157.208L134.902 57.2187L106.778 88.2526L70.8948 126.075H111.627Z"
          fill="currentColor"
        />
        <path
          d="M121.615 119.83H86.1906L192.392 5.35933L149.827 96.4512L149.162 97.8745H150.733H193.587L57.1441 234.419L122.481 121.331L123.348 119.83H121.615Z"
          fill="#FDBB30"
          stroke="#FDBB30"
          strokeWidth="2"
        />
      </svg>

      <svg
        className={clsx(variant === "error" ? "block" : "hidden")}
        width=""
        height=""
        viewBox="0 0 178 184"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.6645 25C6.38055 25 3.00168 30.6304 5.48748 35.2931L78.2299 171.739C80.8834 176.716 88.0325 176.672 90.6242 171.662L111.475 131.359C111.753 130.822 111.49 130.166 110.951 129.891C106.924 127.839 105.308 123.213 105 121V109.652C105 108.566 104.771 107.472 104.658 106.391C104.495 104.828 104.483 102.139 105 98C105.8 91.6 112 89.3333 115 89C116.816 88.8603 118.918 88.5361 121.099 88.1048L136 83.9543L155.665 44.1963C156.516 42.4749 156.651 40.4658 155.89 38.7026C154.031 34.3947 151.984 31.644 148.268 28.4547C147.14 27.4865 145.699 26.9692 144.214 26.9121L94.5 25C93.7 25 89.1667 28.3333 87 30C78.5448 38.4552 80.2395 38.967 77.9881 43.9731C77.6795 44.6592 77.4691 45.3868 77.2732 46.1132C76.5246 48.8893 74.6278 50.4322 72.5 52C68.6099 54.8292 64.0423 53.4374 61.769 52.0402C61.2364 51.7129 60.6993 51.3888 60.166 51.0626C56.7487 48.9725 55.9706 44.5064 55.9774 41.3728C55.9787 40.7921 56.0864 40.2193 56.2571 39.6643L58 34L61.375 26.4061C61.6689 25.7449 61.1849 25 60.4612 25L11.6645 25Z"
          fill="currentColor"
        />
        <path
          d="M126.737 105.386C125.683 105.601 124.735 106.174 124.055 107.007C123.375 107.841 123.003 108.884 123.003 109.96V119.998C123.003 121.855 122.266 123.635 120.953 124.948C119.64 126.261 117.86 126.998 116.003 126.998C114.146 126.998 112.366 126.261 111.053 124.948C109.74 123.635 109.003 121.855 109.003 119.998V99.8278C109.003 98.0563 109.675 96.3509 110.883 95.0552C112.091 93.7596 113.746 92.9702 115.513 92.8462C123.811 92.2675 136.014 89.4394 145.917 83.1252C155.582 76.9557 162.671 67.7946 162.671 53.9388C162.671 40.5916 157.72 31.3373 150.528 25.2004C143.164 18.9142 132.916 15.47 121.911 15.0407C99.1323 14.1493 77.9029 25.8211 73.8334 43.9938C73.428 45.8058 72.3195 47.3826 70.7515 48.3772C69.1836 49.3719 67.2848 49.703 65.4728 49.2976C63.6607 48.8923 62.0839 47.7837 61.0893 46.2158C60.0946 44.6478 59.7635 42.749 60.1689 40.937C63.277 27.0578 72.242 16.8981 83.8484 10.2478C95.5155 3.56025 109.661 0.550138 122.462 1.05416C135.846 1.57684 149.343 5.78166 159.619 14.5507C170.073 23.4737 176.672 36.6901 176.672 53.9388C176.672 73.7169 166.078 86.868 153.45 94.9277C144.9 100.383 135.249 103.655 126.741 105.381L126.737 105.386ZM104.336 161.999C104.336 158.286 105.811 154.725 108.437 152.1C111.062 149.474 114.623 147.999 118.336 147.999C122.05 147.999 125.611 149.474 128.236 152.1C130.862 154.725 132.337 158.286 132.337 161.999C132.337 165.713 130.862 169.274 128.236 171.899C125.611 174.525 122.05 176 118.336 176C114.623 176 111.062 174.525 108.437 171.899C105.811 169.274 104.336 165.713 104.336 161.999Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        className={clsx(variant === "plain" ? "block" : "hidden")}
        width=""
        height=""
        viewBox="0 0 159 151"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M86.6242 146.662C84.0325 151.672 76.8834 151.716 74.2299 146.739L1.48749 10.2931C-0.998306 5.6304 2.38057 0 7.66451 0L150.997 0C156.243 0 159.625 5.55719 157.214 10.2165L86.6242 146.662Z"
          fill="currentColor"
        />
      </svg>

      <svg
        className={clsx(variant === "outline" ? "block" : "hidden")}
        width=""
        height=""
        viewBox="0 0 196 241"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M111.627 126.075L82.5325 178.445L77.6834 187.173L52.579 142.72L0.64876 41.4474C-1.33678 37.5753 1.47505 32.9735 5.82657 32.9735H157.208L134.902 57.2187L106.778 88.2526L70.8948 126.075H111.627Z"
          fill="white"
        />
        <path
          d="M124.213 122.331L126.813 117.83H121.615H90.7743L185.176 16.0779L148.015 95.6045L146.02 99.8745H150.733H188.761L66.4953 222.231L124.213 122.331Z"
          stroke="white"
          strokeWidth="6"
        />
      </svg>
    </>
  );
}
