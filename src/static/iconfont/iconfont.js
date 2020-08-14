import { createGlobalStyle } from 'styled-components'

const GlobalStyleFont = createGlobalStyle`
  @font-face {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1597428466391'); /* IE9 */
    src: url('./iconfont.eot?t=1597428466391#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAPcAAsAAAAAB5wAAAOQAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDBgqCfIJvATYCJAMMCwgABCAFhG0HQBu/BlGU7UmK7EtMRUa6K9nAODMbBqFnvN54nJIPQxnwCRYA8OfgViAAJB6+9mN/7u4iokk0MTTx6SSGRBJNULWS/o/tlyKWTLL4G8yrMrsHIUuiSIU0cwD5gtwFPlybeiEMc9O648//g/3ihwQSS1pYWhp8zVsr45qi9jZXpY4bcDn9/0p8HlBOa29dGGAcUEB7YxsoiwskQW8Yu6AlHifQaJQv21Z6bilooTDHBeJc5CnQImNUGipDvVBbsbRMxEOoT/fpGh4E34+v5qOepCYzp24fprEg8YMfzqOqO3kE0XR2sFVkzAEKsVfp3OUYJec4alSVTZoLaxUhTRWpKgKhJq+1/vBIgqhlljeDKZRKfNARJqqh+KpFD2eq9RjpS8D2hpaht8m9RoNsMPTIvdJ7z0sXHdaKhQtpzcMA239WcfWZy8o15f7rioeJf8W5PqPq/W/KH7wyEmXrV8qDzn0HT+lWfu1xqwdPyx88q+p1/0nZqD7z1u3FD/P8RsVj+P5THyYsnIpl8xf7jK2q8drtxxyD3zJoFC8ZdGqyccnbJkJZ0Bw+oMSp7i0S+CwlZMJTStgzJ0fT4+jVxTUbqsR442IyXYOCWWpLbcSsXK+CkskFswq8ppXk+mxqm9vvd/Wost/xNpVBq+maMhBtZLb1L2OG+6XawTGvm+yj+jwqKi0pejwXvpDsN/yYze6z2Ld2/j3fLmzO/rKIChfDzlMYX5AYdhzq3LgqcSDxIuBag/39xc1T/2/ysF3HkFMfp94dQSOAyhKX90m6fClX/LDfqPt9NdPQPvZbPQW86sd3KOleol6CiX5PVcEAUJa5xDTkooQvAChdw7LFW40nNFpeKuTt9Hi4ukcrJ9TrSZDUGUFWb4wsjDnUaLKAWvVW0WhWxuomXTBHURowYzxAaLcTSatHyNpdJwvjEWr0+oRa7ZHRaCc6b9lkIk5apWBEEcRCejAUGV3jbAtpFVYWI96uUDgtCZjlCFtiBAb5B+YzGUhDeIoZ1gA+mBAOclhXYTo4DSmKDg2sS4gh/gIhRnRAAFf1JH9GV0ErmzCEQiAsiDYYJGLoNJzXmmhV+HwxhGenoOCGhipvOQSziJ1DQfwFdiAzlFqnhls5xzIALxhBcCAOplNB6cCOKFZSBxnVgyQIg/AnDIgbogWgZlxXpf/yavX9tkEjc3qOFDmKlkNKk+0iEf2+g0TUzEIUZgQAAA==') format('woff2'),
    url('./iconfont.woff?t=1597428466391') format('woff'),
    url('./iconfont.ttf?t=1597428466391') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1597428466391#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyleFont
