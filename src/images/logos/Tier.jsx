export function Logo(props) {
  return (
    // <svg viewBox="0 0 84 24" aria-hidden="true" {...props}>
    //   <path
    //     fill="url(#a)"
    //     d="M2.116 2.572h26.835c.416 0 .753.337.753.753v3.764a.753.753 0 0 1-.753.752H2.116a.753.753 0 0 1-.752-.752V3.325c0-.416.337-.753.752-.753Z"
    //   />
    //   <path
    //     fill="url(#b)"
    //     d="M7.498 9.648H23.57c.416 0 .753.337.753.752v3.764a.753.753 0 0 1-.753.753H7.5a.753.753 0 0 1-.753-.753V10.4c0-.415.337-.752.752-.752Z"
    //   />
    //   <path
    //     fill="url(#c)"
    //     d="M12.504 16.723h6.06c.415 0 .752.337.752.753v3.764a.753.753 0 0 1-.752.753h-6.06a.753.753 0 0 1-.753-.753v-3.764c0-.416.337-.753.753-.753Z"
    //   />
    //   <path
    //     className="fill-zinc-900 dark:fill-white"
    //     d="M48.785 20.699c-1.166 0-2.083-.283-2.752-.849-.669-.566-1.003-1.586-1.003-3.06V9.769h-2.212V7.943h2.212l.283-3.06h1.877v3.06h3.755v1.826H47.19v7.02c0 .806.163 1.355.489 1.646.326.275.9.412 1.723.412h1.337v1.852h-1.954Zm6.473-15.585a1.52 1.52 0 0 1-1.08-.412 1.516 1.516 0 0 1-.411-1.08c0-.412.137-.754.411-1.029a1.516 1.516 0 0 1 1.08-.411c.412 0 .763.137 1.055.411.291.275.437.617.437 1.029 0 .429-.146.789-.437 1.08a1.483 1.483 0 0 1-1.055.412Zm-1.08 15.585V7.943h2.16v12.756h-2.16Zm11.914.308c-1.217 0-2.297-.274-3.24-.823a6.12 6.12 0 0 1-2.238-2.34c-.531-.994-.797-2.169-.797-3.523 0-1.338.266-2.504.797-3.498.532-1.012 1.27-1.792 2.212-2.34.96-.566 2.066-.849 3.318-.849 1.234 0 2.297.283 3.189.849a5.544 5.544 0 0 1 2.083 2.186c.48.908.72 1.886.72 2.932 0 .188-.008.377-.026.565v.643H61.952c.051.978.274 1.792.668 2.444.412.634.918 1.114 1.518 1.44a4.13 4.13 0 0 0 1.954.488c.892 0 1.638-.205 2.238-.617a3.531 3.531 0 0 0 1.311-1.672h2.135a5.796 5.796 0 0 1-1.98 2.958c-.96.772-2.195 1.157-3.704 1.157Zm0-11.547a4.33 4.33 0 0 0-2.752.951c-.788.618-1.243 1.527-1.363 2.727h8.024c-.051-1.15-.445-2.05-1.183-2.7-.737-.652-1.645-.978-2.726-.978Zm9.165 11.239V7.943h1.954l.18 2.443a4.625 4.625 0 0 1 1.8-2.006c.806-.497 1.8-.746 2.984-.746v2.263h-.592a5.18 5.18 0 0 0-2.083.412c-.634.257-1.14.703-1.517 1.337s-.566 1.509-.566 2.623v6.43h-2.16Z"
    //   />
    //   <defs>
    //     <linearGradient
    //       id="a"
    //       x1="31.191"
    //       x2="4.132"
    //       y1="2.572"
    //       y2="4.707"
    //       gradientUnits="userSpaceOnUse"
    //     >
    //       <stop stopColor="#0085FF" />
    //       <stop offset="1" stopColor="#00FFF0" />
    //     </linearGradient>
    //     <linearGradient
    //       id="b"
    //       x1="1.364"
    //       x2="36.581"
    //       y1="2.572"
    //       y2="11.265"
    //       gradientUnits="userSpaceOnUse"
    //     >
    //       <stop stopColor="#F36AFF" />
    //       <stop offset="1" stopColor="red" />
    //     </linearGradient>
    //     <linearGradient
    //       id="c"
    //       x1="39.01"
    //       x2="-3.386"
    //       y1="-1.104"
    //       y2="22.576"
    //       gradientUnits="userSpaceOnUse"
    //     >
    //       <stop stopColor="#FFC600" />
    //       <stop offset="1" stopColor="#FF7A00" />
    //     </linearGradient>
    //   </defs>
    // </svg>
    // Black and white for now
    <svg viewBox="0 0 84 24" aria-hidden="true" {...props}>
      <path
        className="fill-zinc-900 dark:fill-white"
        d="M48.785 21.517c-1.166 0-2.083-.283-2.752-.849-.669-.566-1.003-1.586-1.003-3.06v-7.021h-2.212V8.76h2.212l.283-3.06h1.877v3.06h3.755v1.826H47.19v7.02c0 .807.163 1.355.489 1.647.326.274.9.411 1.723.411h1.337v1.852h-1.954Zm6.473-15.585c-.428 0-.788-.137-1.08-.412a1.516 1.516 0 0 1-.411-1.08 1.4 1.4 0 0 1 .411-1.029A1.516 1.516 0 0 1 55.258 3c.412 0 .763.137 1.055.411.291.275.437.618.437 1.03 0 .428-.146.788-.437 1.08a1.483 1.483 0 0 1-1.055.41Zm-1.08 15.585V8.761h2.16v12.756h-2.16Zm11.914.309c-1.217 0-2.297-.275-3.24-.823a6.12 6.12 0 0 1-2.238-2.34c-.531-.995-.797-2.17-.797-3.524 0-1.337.266-2.503.797-3.498.532-1.011 1.27-1.791 2.212-2.34.96-.566 2.066-.849 3.318-.849 1.234 0 2.297.283 3.189.849a5.544 5.544 0 0 1 2.083 2.186c.48.909.72 1.886.72 2.932 0 .188-.008.377-.026.566v.643H61.952c.051.977.274 1.791.668 2.443.412.634.918 1.114 1.518 1.44a4.13 4.13 0 0 0 1.954.489c.892 0 1.638-.206 2.238-.618a3.531 3.531 0 0 0 1.311-1.671h2.135a5.797 5.797 0 0 1-1.98 2.957c-.96.772-2.195 1.158-3.704 1.158Zm0-11.548a4.329 4.329 0 0 0-2.752.952c-.788.617-1.243 1.526-1.363 2.726h8.024c-.051-1.149-.445-2.049-1.183-2.7-.737-.652-1.645-.978-2.726-.978Zm9.165 11.239V8.761h1.954l.18 2.443a4.625 4.625 0 0 1 1.8-2.006c.806-.497 1.8-.746 2.984-.746v2.263h-.592c-.754 0-1.449.138-2.083.412-.634.257-1.14.703-1.517 1.337-.377.635-.566 1.509-.566 2.623v6.43h-2.16Z"
      />
      <path
        className="fill-zinc-900 dark:fill-white"
        d="M1 2.846C1 2.379 1.338 2 1.755 2h26.907c.417 0 .755.379.755.846v4.228c0 .467-.338.846-.755.846H1.755C1.338 7.92 1 7.541 1 7.074V2.846ZM5.736 9.95c0-.467.34-.846.76-.846h16.24c.42 0 .76.379.76.846v4.229c0 .467-.34.845-.76.845H6.496c-.42 0-.76-.378-.76-.845v-4.23Zm5.92 7.104c0-.467.317-.846.707-.846h5.69c.39 0 .707.379.707.846v4.229c0 .467-.316.845-.707.845h-5.69c-.39 0-.707-.378-.707-.845v-4.229Z"
      />
    </svg>
  )
}
