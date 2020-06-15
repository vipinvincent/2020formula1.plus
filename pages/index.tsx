import Layout from '../components/layout/Layout'
import { motion } from 'framer-motion'
const spinTransition = {
  loop: Infinity,
  ease: 'linear',
  duration: 0.2,
}

const IndexPage = () => (
  <Layout title='Formula1 Plus - Formula 1 Latest News, Insights, Live Grand Prix Updates, Schedule, Standings, Drivers, Teams, Results and much more...'>
    <div className='w-full h-screen flex flex-col items-center content-center justify-center px-4'>
      <div className='w-full h-full max-w-5xl rounded text-center text-black-70 my-6 mx-24 px-8 pb-8'>
        <div className='w-full h-full flex flex-col items-center content-center justify-center text-normal font-normal leading-tight'>
          <div className='w-full h-24 sm:h-40 md:h-48 lg:h-64 xl:h-84'>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}>
              <svg
                width='1537px'
                height='323px'
                viewBox='0 0 1537 323'
                version='1.1'
                className='w-full h-24 sm:h-32 md:h-48 lg:h-64 item'>
                <title>F1 car - Formula1.plus</title>
                <desc>Created with Sketch by Vipin.</desc>
                <defs>
                  <linearGradient
                    x1='50%'
                    y1='100%'
                    x2='50%'
                    y2='-2.48949813e-15%'
                    id='linearGradient-1'>
                    <stop stopColor='#650401' offset='0%'></stop>
                    <stop stopColor='#E10600' offset='100%'></stop>
                  </linearGradient>
                </defs>
                <g
                  id='Page-1'
                  stroke='none'
                  strokeWidth='1'
                  fill='none'
                  fillRule='evenodd'>
                  <motion.g
                    initial={{ scale: 1, x: 0, y: 0 }}
                    animate={{ scale: 1, x: 2, y: 2 }}
                    transition={{
                      yoyo: Infinity,
                      duration: 0.4,
                      ease: 'linear',
                    }}
                    id='f1'>
                    <g
                      id='body'
                      transform='translate(768.500000, 150.500000) scale(-1, 1) rotate(-180.000000) translate(-768.500000, -150.500000) translate(0.000000, 0.000000)'>
                      <g
                        id='halo'
                        transform='translate(669.000000, 203.500000) scale(1, -1) translate(-669.000000, -203.500000) translate(529.000000, 164.000000)'
                        fill='#FFB91C'>
                        <path
                          d='M146,5.5 C155.570117,6.84579764 200.236783,19.3457976 280,43 L280,58.5 C257.234763,50.6858198 241.40143,45.5191531 232.5,43 C223.173237,40.3604753 188.745417,29.1199274 159,24 C135.031452,19.8744157 117.5,17.5 106.5,18 C95.5,18.5 82.5009003,21.3327332 78.5,24 C63.5,34 59.5,37 49.5,50 C39.5,63 41.6628083,79 41,79 C32,79 18.3333333,79 0,79 C9.66666667,66.3333333 17.6666667,55.6666667 24,47 C37.2097353,28.9235202 46.8889899,21.7412631 52,17.5 C55.1251907,14.906627 62.9366729,8.90783318 75,5.5 C84.2796224,2.87855029 95.0898291,0.887215206 104,1 C118.00369,1.17725847 133.009906,3.67326803 146,5.5 Z'
                          id='Polygon'></path>
                      </g>
                      <path
                        d='M602.907273,299.4 C582.749537,296.2 578.69482,295.5 577.188783,294.7 C575.566896,294 584.950669,292.1 602.328028,289.8 L607.541235,289.1 L609.974066,282.6 C614.608028,270.1 614.723877,270.4 606.614443,268 C602.675575,266.8 592.712556,263.2 584.371424,260.1 C576.59336,257.073988 426.444656,260.494321 402.75699,256 C401.849003,255.827725 348.182337,230.327725 241.75699,179.5 C222.147157,171.518824 208.813823,167.185491 201.75699,166.5 C182.978803,164.675913 172.869309,172.804947 172.25699,172.6 C170.866802,172.2 166.642557,184.8 137.25699,200.9 L75.2569905,201 L0.256990489,201 L16.1318015,162.1 C19.2703698,159.088798 21.5043583,156.880998 22.8337671,155.476601 C26.6583925,151.436238 30.9891839,137.344038 35.8261412,113.2 L29.454443,88.6 C36.7529336,88.6 42.7770846,88.3 42.7770846,88 C42.7770846,87.7 56.6789713,73.9333333 56.6789713,70.1 C56.6789713,66.1666667 85.3716444,62.4666667 142.75699,59 L241.75699,14 L649.826141,5.6 L1059.35256,1.1 L1059.7001,3.4 C1059.9318,4.6 1059.46841,5.6 1058.77331,5.6 C1057.96237,5.6 1057.61482,10.7 1057.84652,22.4 L1058.19407,39.1 L1074.52878,39.4 C1113.98226,61.3711164 1149.93408,73.5711164 1182.38425,76 C1233.78184,79.8470912 1303.67822,78.6 1303.90991,78.6 C1304.14161,78.6 1308.65973,83.4 1340.86576,67.9 C1373.0718,52.4 1399.75095,45.5 1401.25699,45.5 C1403.59032,50.5 1395.92366,53 1378.25699,53 C1374.54982,55.1333333 1351.08042,55.1333333 1307.84878,53 L1307.84878,29.2 L1307.84878,0.6 L1396.24161,0.6 C1444.78237,0.7 1486.83558,1.1 1489.7318,1.5 C1498.88388,3.1 1498.99973,3.5 1498.99973,30.2 C1498.99973,45.5447169 1499.23781,50.9010509 1499.25699,53.5 C1499.26681,54.8304566 1499.94113,55.3519486 1498.99973,56.3 C1497.61529,57.6444117 1489.7318,56 1476.75699,56 C1463.78218,56 1451.79425,56.3 1442.75699,56.3 C1440.90341,55.8 1503.7385,24.7 1498.75699,30 C1495.50914,33.3339111 1380.36971,102.077224 1373.0718,106.1 C1342.20897,123.112313 1313.16091,135.749625 1279.46576,147.1 C1266.61604,151.428493 1253.82251,161.995713 1238.91859,163.1 C1234.51633,163.5 1226.98614,164.6 1222.35218,165.7 C1210.99897,168.4 1195.35935,169.4 1182.38425,168.2 C1176.47595,167.6 1167.09218,167.2 1161.29973,167.2 C1155.62312,167.2 1127.7035,167.3 1099.32048,167.4 C1070.93746,167.6 1029.9269,167.1 1008.14727,166.5 L968.642745,165.4 L964.703877,168 C962.502745,169.4 958.795575,171.2 956.478594,172.1 C950.80199,174.1 944.082745,172.7 934.698971,167.5 C929.833311,164.7 926.473688,163.6 923.461613,163.6 C920.10199,163.6 918.248405,162.9 915.699726,160.6 C911.992556,157.2 909.675575,157 888.2435,158.3 C877.701235,158.9 876.890292,159.1 876.890292,161 C877.006141,162.5 878.628028,163.8 883.030292,165.6 C886.389915,167 889.749537,169.3 890.67633,170.7 C892.182368,173.1 892.182368,173.7 890.328783,176.1 C887.316707,180 876.890292,183.8 867.390669,184.4 L859.512934,184.9 L859.512934,173.2 L859.512934,161.6 L864.146896,161.6 C868.433311,161.6 870.171047,160.5 867.738217,159.2 C867.27482,158.9 848.043877,159.2 825.221613,159.8 L783.631802,161 L739.60916,172.6 L695.586519,184.3 L695.238971,192.6 L694.891424,200.9 L689.098971,206.5 L683.306519,212.1 L666.160858,212.1 C650.521235,212.1 648.667651,212.3 646.350669,214.1 C643.222745,216.5 640.558217,221.5 640.558217,225.1 C640.558217,227.3 641.021613,227.6 644.381235,227.6 C651.563877,227.6 652.143122,229.1 652.143122,248.4 C652.143122,264.3 651.911424,265.8 649.826141,267.6 C648.551802,268.7 646.23482,269.6 644.844632,269.6 C642.411802,269.6 641.832556,270.5 639.515575,277.6 C638.125386,282.1 636.735198,286.3 636.271802,287.1 C635.808405,288.3 636.735198,288.6 640.674066,288.7 C643.454443,288.7 647.625009,289.3 649.826141,290 C653.185764,291.1 653.880858,291.8 653.880858,294.2 C653.880858,296.5 653.069915,297.5 649.826141,298.8 C646.466519,300.3 642.759349,300.6 627.235575,300.5 C617.040858,300.4 606.151047,299.9 602.907273,299.4 Z'
                        id='main-body'
                        fill='url(#linearGradient-1)'
                        fillRule='nonzero'
                        transform='translate(749.878495, 150.558712) scale(-1, 1) translate(-749.878495, -150.558712) '></path>
                      <path
                        d='M556,24.7504851 C575.484723,15.0078046 590.65139,9.13365017 601.5,7.12802179 C646.522248,-1.19543151 684.281878,3.12802179 710.5,3.12802179 C746.469807,3.12802179 827.136474,17.8355096 952.5,47.2504851 C1079.70442,88.3203193 1157.37109,112.779498 1185.5,120.628022 C1283.75146,148.042129 1262.98536,132.730063 1273.5,139.250485 C1288.39708,148.488581 1283,153.750485 1266,153.750485 C1249,153.750485 1216.48839,156.448814 1185.5,156.750485 C1146.0849,157.13419 1048.27242,157.13419 892.062543,156.750485 L540.811517,159.24472 C540.266172,159.248592 539.721861,159.196691 539.187076,159.089826 C529.995446,157.253078 524.599754,155.473297 523,153.750485 C516.5,146.750485 512.230491,141.168025 511.5,139.250485 C509.682837,134.480433 506.45421,127.722085 504.5,120.628022 C502.152537,112.106393 501.744435,103.061061 502,97.6280218 C502.308162,91.0768309 503.807004,80.6347994 507,72.2504851 C510,64.3729484 514.476887,59.7322665 517.5,55.2504851 C520.635229,50.602491 527.432155,45.2473494 536,37.7504851 C538.666667,35.4171518 545.333333,31.0838184 556,24.7504851 Z'
                        id='side-body'
                        fill='#6A0300'
                        transform='translate(892.062543, 80.625243) scale(1, -1) translate(-892.062543, -80.625243) '></path>
                      <path
                        d='M1361,199.5 C1393.96169,200.608367 1418.46169,201.108367 1434.5,201 C1450.53831,200.891633 1476.03831,200.891633 1511,201 C1528.63157,216.333333 1536.9649,224 1536,224 C1535.17607,224 1495,223.5 1495,224.5 C1495,227 1495,229.701172 1495,230 C1495,230.5 1487,230 1487,230 C1487,230 1487,237.5 1487,237.5 C1491.45405,237.5 1474.5,238.296225 1474.5,238.5 C1474.5,242.5 1475,248.5 1475,248.5 C1478.89631,248.5 1409.27091,243.123594 1400,242.5 C1391.7189,241.942984 1383.66313,240.943856 1381,240.5 C1377.23694,239.872824 1373.90361,237.872824 1371,234.5 C1366.66667,229.833333 1364.5,227.5 1364.5,227.5 C1364.5,227.5 1360.89368,218 1360.89368,218 C1360.89368,218 1360.92912,211.833333 1361,199.5 Z'
                        id='rear-wing'
                        fill='#ead61c'></path>
                    </g>
                    <motion.g
                      initial={{ x: 200, y: 155 }}
                      animate={{ x: 203, y: 155, rotate: 360 }}
                      transition={spinTransition}
                      id='front-tyre'>
                      <circle
                        id='Oval-1'
                        fill='#333333'
                        fillRule='nonzero'
                        cx='98.5'
                        cy='98.5'
                        r='98.5'></circle>
                      <circle
                        id='Oval-2'
                        fill='#FFD318'
                        fillRule='nonzero'
                        cx='98'
                        cy='98'
                        r='82'></circle>
                      <polygon
                        id='Shape-1'
                        fill='#333333'
                        fillRule='nonzero'
                        points='121.85801 4.28182 145.646845 29.94208 121.85801 55.606 74.2839806 55.606 50.4951456 29.94208 74.2839806 4.28182'></polygon>
                      <polygon
                        id='Shape-2'
                        fill='#333333'
                        fillRule='nonzero'
                        points='134.862864 121.46404 171.725728 154.14784 134.862864 186.83164 61.1371359 186.83164 24.2742718 154.14784 61.1371359 121.46404'></polygon>
                      <rect
                        id='Rectangle-path-1'
                        fill='#333333'
                        fillRule='nonzero'
                        transform='translate(34.364958, 149.222450) rotate(-31.944753) translate(-34.364958, -149.222450) '
                        x='24.6330427'
                        y='143.862441'
                        width='19.4638296'
                        height='10.7200177'></rect>
                      <rect
                        id='Rectangle-path-2'
                        fill='#333333'
                        fillRule='nonzero'
                        transform='translate(161.712845, 148.936232) rotate(38.000000) translate(-161.712845, -148.936232) '
                        x='151.997432'
                        y='143.585312'
                        width='19.4308252'
                        height='10.70184'></rect>
                      <rect
                        id='Rectangle-path-3'
                        fill='#333333'
                        fillRule='nonzero'
                        transform='translate(56.142018, 31.895926) rotate(58.000000) translate(-56.142018, -31.895926) '
                        x='46.426605'
                        y='26.5450055'
                        width='19.4308252'
                        height='10.70184'></rect>
                      <rect
                        id='Rectangle-path-4'
                        fill='#333333'
                        fillRule='nonzero'
                        transform='translate(139.822816, 31.895498) rotate(-58.000000) translate(-139.822816, -31.895498) '
                        x='130.107404'
                        y='26.5445784'
                        width='19.4308252'
                        height='10.70184'></rect>
                      <circle
                        id='Oval-3'
                        fill='#333333'
                        fillRule='nonzero'
                        cx='98'
                        cy='98'
                        r='75'></circle>
                      <circle
                        id='Oval-4'
                        fill='#A8A8A8'
                        fillRule='nonzero'
                        cx='97.5'
                        cy='97.5'
                        r='54.5'></circle>
                      <circle
                        id='Oval-5'
                        fill='#7F7F7F'
                        fillRule='nonzero'
                        cx='98.5'
                        cy='98.5'
                        r='45.5'></circle>
                      <circle
                        id='Oval-6'
                        fill='#FFFFFF'
                        fillRule='nonzero'
                        cx='98.5'
                        cy='98.5'
                        r='39.3171296'></circle>
                      <rect
                        id='Rectangle-path-6'
                        fill='#7F7F7F'
                        fillRule='nonzero'
                        transform='translate(98.499756, 99.000056) rotate(-162.000000) translate(-98.499756, -99.000056) '
                        x='54.9100127'
                        y='95.7000558'
                        width='87.1794872'
                        height='6.6'></rect>
                      <rect
                        id='Rectangle-path-7'
                        fill='#7F7F7F'
                        fillRule='nonzero'
                        transform='translate(98.500000, 99.000000) rotate(-90.000000) translate(-98.500000, -99.000000) '
                        x='54.9102564'
                        y='95.7'
                        width='87.1794872'
                        height='6.6'></rect>
                      <rect
                        id='Rectangle-path-8'
                        fill='#7F7F7F'
                        fillRule='nonzero'
                        transform='translate(98.498767, 98.999058) rotate(-54.000000) translate(-98.498767, -98.999058) '
                        x='54.9090238'
                        y='95.6990575'
                        width='87.1794872'
                        height='6.6'></rect>
                      <rect
                        id='Rectangle-path-9'
                        fill='#7F7F7F'
                        fillRule='nonzero'
                        transform='translate(98.500055, 98.999754) rotate(162.000000) translate(-98.500055, -98.999754) '
                        x='54.9103117'
                        y='95.699754'
                        width='87.1794872'
                        height='6.6'></rect>
                      <rect
                        id='Rectangle-path-10'
                        fill='#7F7F7F'
                        fillRule='nonzero'
                        transform='translate(98.500934, 99.001244) rotate(-126.000000) translate(-98.500934, -99.001244) '
                        x='54.9111901'
                        y='95.7012442'
                        width='87.1794872'
                        height='6.6'></rect>
                      <circle
                        id='Oval-8'
                        fill='#7F7F7F'
                        fillRule='nonzero'
                        cx='98.5'
                        cy='98.5'
                        r='16.5'></circle>
                      <circle
                        id='Oval-9'
                        fill='#FFFFFF'
                        fillRule='nonzero'
                        cx='98.5'
                        cy='98.5'
                        r='6.5'></circle>
                      <image
                        id='Bitmap-1'
                        x='64'
                        y='21.0464286'
                        width='70.6941538'
                        height='14.8714286'
                        href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABlIAAAFbCAMAAACZP+OWAAADAFBMVEUzMzNGQjBxYyqAbyj/0xgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA2u8oAAAAeGVYSWZNTQAqAAAACAAEARoABQAAAAEAAAA+ARsABQAAAAEAAABGASgAAwAAAAEAAgAAh2kABAAAAAEAAABOAAAAAAAAAHgAAAABAAAAeAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAGUqADAAQAAAABAAABWwAAAADRNQH0AAAACXBIWXMAABJ0AAASdAHeZh94AAAsZklEQVR4Ae2d4WLbug6DT9O+/zOfqK66uKFsWhAhWcJ+3CxKIgMfQfE63Xb++9IvERABERABETAJfD4ej4//Lvwyd9GiCIiACIiACHwTeI4V/1QRMxEQAREQARE4JOCfKofb6EUREAEREAEReBL49N2qiJUIiIAIiIAInBNwDZXzbfQOERABERABEXDdqQiTCIiACIiACPgInN6p+LbRu0RABERABETgeady/Ke/hEgEREAEREAE3ASOb1Tc2+iNIiACIiACInB8oyI+IiACIiACInCFwMGXX1e20XtFQAREQARE4OAvqQiOCIiACIiACFwkULpRubiN3i4CIiACIiACpT/5JTIiIAIiIAIicJmAfZ9yeRt9QAREQAREQATs+xRxEQEREAEREIEKAtZ9SsU2+ogIiIAIiIAIWPcpoiICIiACIiACVQQeb/+9x6pt9CEREAEREAEReP/qS0xEQAREQAREoI7A20yp20afEgEREAEREIG3H6cIiQiIgAiIgAjUEvhzn1K7jT4nAiIgAiIgAl/7H9ELiAiIgAiIgAhUE9jfplRvow+KgAiIgAiIwP7HKeIhAiIgAiIgAgCB16++gG30UREQAREQARF4/epLNERABERABEQAIfBym4Jso8+KgAiIgAiIwMttimCIgAiIgAiIAETg30yBttGHRUAEREAERODfX04RCxEQAREQARHACPzepmDb6NMiIAIiIAIi8HubIhQiIAIiIAIiABLIf+gL3EYfFwEREAEREIH8zZdIiIAIiIAIiABK4Oc2Bd1GnxcBERABERCBn9sUgRABERABERABmMB2mwJvow1EQAREQAREQCNFGRABERABEWhEYPvmq9Fm2kYEREAERGBpAt+3KUsTkHkREAEREIFGBDRSGoHUNiIgAiIgAt/ffAmDCIiACIiACDQgkG5TGmyjLURABERABERAI0UZEAEREAERaEQgffPVaCttIwIiIAIisDiB523KHQl8PvRLBERABEYk8HnHI7WZ5nuOlJ9/Sub5gyD9EgEREIGhCHw8HgtPlXuOlPQjIP0SAREQgTEJfKw7UzRSxoykVImACNyYwMeyNyrPr5CafYnG20h3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'></image>
                    </motion.g>
                    <motion.g
                      initial={{ x: 1250, y: 155 }}
                      animate={{ x: 1253, y: 155, rotate: 360 }}
                      transition={spinTransition}
                      id='rear-tyre'>
                      <circle
                        id='Oval-11'
                        fill='#333333'
                        fillRule='nonzero'
                        cx='98.5'
                        cy='98.5'
                        r='98.5'></circle>
                      <circle
                        id='Oval-12'
                        fill='#FFD318'
                        fillRule='nonzero'
                        cx='98'
                        cy='98'
                        r='82'></circle>
                      <polygon
                        id='Shape-12'
                        fill='#333333'
                        fillRule='nonzero'
                        points='121.85801 4.28182 145.646845 29.94208 121.85801 55.606 74.2839806 55.606 50.4951456 29.94208 74.2839806 4.28182'></polygon>
                      <polygon
                        id='Shape-13'
                        fill='#333333'
                        fillRule='nonzero'
                        points='134.862864 121.46404 171.725728 154.14784 134.862864 186.83164 61.1371359 186.83164 24.2742718 154.14784 61.1371359 121.46404'></polygon>
                      <rect
                        id='Rectangle-path-20'
                        fill='#333333'
                        fillRule='nonzero'
                        transform='translate(34.364958, 149.222450) rotate(-31.944753) translate(-34.364958, -149.222450) '
                        x='24.6330427'
                        y='143.862441'
                        width='19.4638296'
                        height='10.7200177'></rect>
                      <rect
                        id='Rectangle-path-21'
                        fill='#333333'
                        fillRule='nonzero'
                        transform='translate(161.712845, 148.936232) rotate(38.000000) translate(-161.712845, -148.936232) '
                        x='151.997432'
                        y='143.585312'
                        width='19.4308252'
                        height='10.70184'></rect>
                      <rect
                        id='Rectangle-path-22'
                        fill='#333333'
                        fillRule='nonzero'
                        transform='translate(56.142018, 31.895926) rotate(58.000000) translate(-56.142018, -31.895926) '
                        x='46.426605'
                        y='26.5450055'
                        width='19.4308252'
                        height='10.70184'></rect>
                      <rect
                        id='Rectangle-path-23'
                        fill='#333333'
                        fillRule='nonzero'
                        transform='translate(139.822816, 31.895498) rotate(-58.000000) translate(-139.822816, -31.895498) '
                        x='130.107404'
                        y='26.5445784'
                        width='19.4308252'
                        height='10.70184'></rect>
                      <circle
                        id='Oval-20'
                        fill='#333333'
                        fillRule='nonzero'
                        cx='98'
                        cy='98'
                        r='75'></circle>
                      <circle
                        id='Oval-21'
                        fill='#A8A8A8'
                        fillRule='nonzero'
                        cx='97.5'
                        cy='97.5'
                        r='54.5'></circle>
                      <circle
                        id='Oval-22'
                        fill='#7F7F7F'
                        fillRule='nonzero'
                        cx='98.5'
                        cy='98.5'
                        r='45.5'></circle>
                      <circle
                        id='Oval-23'
                        fill='#FFFFFF'
                        fillRule='nonzero'
                        cx='98.5'
                        cy='98.5'
                        r='39.3171296'></circle>
                      <rect
                        id='Rectangle-path-30'
                        fill='#7F7F7F'
                        fillRule='nonzero'
                        transform='translate(98.499756, 99.000056) rotate(-162.000000) translate(-98.499756, -99.000056) '
                        x='54.9100127'
                        y='95.7000558'
                        width='87.1794872'
                        height='6.6'></rect>
                      <rect
                        id='Rectangle-path-31'
                        fill='#7F7F7F'
                        fillRule='nonzero'
                        transform='translate(98.500000, 99.000000) rotate(-90.000000) translate(-98.500000, -99.000000) '
                        x='54.9102564'
                        y='95.7'
                        width='87.1794872'
                        height='6.6'></rect>
                      <rect
                        id='Rectangle-path-32'
                        fill='#7F7F7F'
                        fillRule='nonzero'
                        transform='translate(98.498767, 98.999058) rotate(-54.000000) translate(-98.498767, -98.999058) '
                        x='54.9090238'
                        y='95.6990575'
                        width='87.1794872'
                        height='6.6'></rect>
                      <rect
                        id='Rectangle-path-33'
                        fill='#7F7F7F'
                        fillRule='nonzero'
                        transform='translate(98.500055, 98.999754) rotate(162.000000) translate(-98.500055, -98.999754) '
                        x='54.9103117'
                        y='95.699754'
                        width='87.1794872'
                        height='6.6'></rect>
                      <rect
                        id='Rectangle-path-34'
                        fill='#7F7F7F'
                        fillRule='nonzero'
                        transform='translate(98.500934, 99.001244) rotate(-126.000000) translate(-98.500934, -99.001244) '
                        x='54.9111901'
                        y='95.7012442'
                        width='87.1794872'
                        height='6.6'></rect>
                      <circle
                        id='Oval'
                        fill='#7F7F7F'
                        fillRule='nonzero'
                        cx='98.5'
                        cy='98.5'
                        r='16.5'></circle>
                      <circle
                        id='Oval-30'
                        fill='#FFFFFF'
                        fillRule='nonzero'
                        cx='98.5'
                        cy='98.5'
                        r='6.5'></circle>
                      <image
                        id='Bitmap-2'
                        x='64'
                        y='21.0464286'
                        width='70.6941538'
                        height='14.8714286'
                        href='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABlIAAAFbCAMAAACZP+OWAAADAFBMVEUzMzNGQjBxYyqAbyj/0xgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA2u8oAAAAeGVYSWZNTQAqAAAACAAEARoABQAAAAEAAAA+ARsABQAAAAEAAABGASgAAwAAAAEAAgAAh2kABAAAAAEAAABOAAAAAAAAAHgAAAABAAAAeAAAAAEAA6ABAAMAAAABAAEAAKACAAQAAAABAAAGUqADAAQAAAABAAABWwAAAADRNQH0AAAACXBIWXMAABJ0AAASdAHeZh94AAAsZklEQVR4Ae2d4WLbug6DT9O+/zOfqK66uKFsWhAhWcJ+3CxKIgMfQfE63Xb++9IvERABERABETAJfD4ej4//Lvwyd9GiCIiACIiACHwTeI4V/1QRMxEQAREQARE4JOCfKofb6EUREAEREAEReBL49N2qiJUIiIAIiIAInBNwDZXzbfQOERABERABEXDdqQiTCIiACIiACPgInN6p+LbRu0RABERABETgeady/Ke/hEgEREAEREAE3ASOb1Tc2+iNIiACIiACInB8oyI+IiACIiACInCFwMGXX1e20XtFQAREQARE4OAvqQiOCIiACIiACFwkULpRubiN3i4CIiACIiACpT/5JTIiIAIiIAIicJmAfZ9yeRt9QAREQAREQATs+xRxEQEREAEREIEKAtZ9SsU2+ogIiIAIiIAIWPcpoiICIiACIiACVQQeb/+9x6pt9CEREAEREAEReP/qS0xEQAREQAREoI7A20yp20afEgEREAEREIG3H6cIiQiIgAiIgAjUEvhzn1K7jT4nAiIgAiIgAl/7H9ELiAiIgAiIgAhUE9jfplRvow+KgAiIgAiIwP7HKeIhAiIgAiIgAgCB16++gG30UREQAREQARF4/epLNERABERABEQAIfBym4Jso8+KgAiIgAiIwMttimCIgAiIgAiIAETg30yBttGHRUAEREAERODfX04RCxEQAREQARHACPzepmDb6NMiIAIiIAIi8HubIhQiIAIiIAIiABLIf+gL3EYfFwEREAEREIH8zZdIiIAIiIAIiABK4Oc2Bd1GnxcBERABERCBn9sUgRABERABERABmMB2mwJvow1EQAREQAREQCNFGRABERABEWhEYPvmq9Fm2kYEREAERGBpAt+3KUsTkHkREAEREIFGBDRSGoHUNiIgAiIgAt/ffAmDCIiACIiACDQgkG5TGmyjLURABERABERAI0UZEAEREAERaEQgffPVaCttIwIiIAIisDiB523KHQl8PvRLBERABEYk8HnHI7WZ5nuOlJ9/Sub5gyD9EgEREIGhCHw8HgtPlXuOlPQjIP0SAREQgTEJfKw7UzRSxoykVImACNyYwMeyNyrPr5CafYnG20h3KTduNkkXgRUILHuj8tBIWSHf8igCIsAlsOpM0Ujh5kxXEwERWIPAojNFI2WNeMulCIgAmcCD97OAga6kkUKOmS4nAiKwBoE1b1M0UtZIt1yKgAiwCSw5Uz7143l2znQ9ERCBNQgs+dWXRsoa4ZZLERABNgGNlIF+yHMkRX8vhd0aup4IiMB1Akt+86W7lOtB0SdEQAREwEFgxdsUjRRHMPQWERABEbhOQCPl6OumcV7TF1/Xs61PiIAI0AlopIwzNo6UaKTQW0MXFAERuE5AI+XoIB/nNY2U69nWJ0RABOgENFLGGRtHSjRS6K2hC4qACFwnoJFydJCP85pGyvVs6xMiIAJsAvpDxONMjUMlGins1tD1REAErhNY8SblS3+I+HpQ9AkREAEROCegkXJ4bzDOi7pLOQ+z3iECItCZwJLfe+kupXPqdHkREIFJCSx5k6KRMmmaZUsERKAvgTVvUjRS+qZOVxcBEZiTwKITRf+9lDnjLFciIAJdCSw6Ub70X3XsGjtdXAREYEoCq04UjZQp4yxTIiACXQksO1E0UrrmThcXARGYkcC6E0UjZcY8y5MIiEBHAh+Pz3H+Fh9byS1/lvL50C8REAERGJTAwgPl6553Key5q+uJgAiIgAg4CHx+3PHf+HIY01tEQAREQATYBJ7/Whb7krqeCIiACIjAnAQ0Uuasq1yJgAiIQAcCGikdoOuSIiACIjAlgeePUvTF15SVlSkREAERoBNI/+ER+kV1QREQAREQgRkJaKTMWFV5EgEREIEeBNL3XrpL6UFe1xQBERCB6QikmxSNlOnKKkMiIAIi0IOARkoP6rqmCIiACMxI4Pt7L92lzFhaeRIBERABNoHvmxSNFDZ2XU8EREAEJiSw3aRopExYWlkSAREQATaB7SZFI4XNXdcTAREQgQkJaKRMWFRZEgEREIEuBH6+99JdShf6uqgIiIAITEXg5yZFI2WqqsqMCIiACPQgkG9SNFJ60Nc1RUAERGAqAvkmRSNlqrLKjAiIgAh0IPB7k6KR0oG+LikCIiACMxH4N1E0Umaqq7yIgAiIQAcCv1976Z+N7EBflxQBERCBmQi83KToLmWmwsqLCIiACNAJvE4UjRQ6fl1QBERABGYi8PK1l774mqmw8iICIiACdAK7mxTdpdD564IiIAIiMA+B/UTRSJmnsnIiAiIgAmwCfyaKRgq7ALqeCIiACExD4O9E0UiZprQyIgIiIAJkAm8TRSOFXAFdTgREQARmIfA+UTRSZqmtfIiACIgAl4AxUTRSuCXQ1URABERgEgLWRNFImaS4siECIiACVALmRNFIodZAFxMBERCBOQjYE0UjZY7qyoUIiIAIMAkUJopGCrMIupYIiIAIzEDg8/Hxn/1rBnfyIAIiIAIiwCNQukV5ThmeCF1JBERABETg/gTKtygaKfevrhyIgAiIAJPAwS2KRgqzELqWCIiACNydwOEtikbK3csr/SIgAiLAI3A2UPSzFF4tdCUREAERuDWB84GikXLrAku8CIiACLAIeAaKRgqrGrqOCIiACNyYgG+gaKTcuMSSLgIiIAIUAp+P4l9tfP5EfveLokcXEQEREAERuCeBC/PkOVzu6VGqRUAEREAEwgk8x4n7/mS7WQmXpAuIgAiIgAjcj8D1cZKGyv18SrEIiIAIiEAcgTRLLt+dbPcotxwpP3431/pfERABERCBlgRK/8hwnhqHj3GTLmznx6EhvSgCIiACItCLQNjBH7exRkqvsOi6IiACInBMIO7kD9tZI+W4pHpVBERABHoRCDv44zbWSOkVFl1XBERABI4JxJ38YTtrpByXVK+KgAiIQC8CYQd/3MYaKb3CouuKgAiIwDGBuJM/bGeNlOOS6lUREAER6EUg7OCP21gjpVdYdF0REAEROCYQd/KH7ayRclxSvSoCIiACvQiEHfxxG2uk9AqLrisCIiACxwTiTv6wnTVSjkuqV0VABESgF4Gwgz9uY42UXmHRdUVABETgmEDcyR+2s0bKcUn1qgiIgAj0IhB28MdtrJHSKyy6rgiIgAgcE4g7+cN21kg5LqleFQEREIFeBMIO/riNNVJ6hUXXFQEREIFjAnEnf9jOGinHJdWrIiACItCLQNjBH7exRkqvsOi6IiACInBMIO7kD9tZI+W4pHpVBERABHoRCDv44zbWSOkVFl1XBERABI4JxJ38YTtrpByXVK+KgAiIQC8CYQd/3MYaKb3CouuKgAiIwDGBuJM/bGeNlOOS6lUREAER6EUg7OCP21gjpVdYdF0REAEROCYQd/KH7ayRclxSvSoCIiACvQiEHfxxG2uk9AqLrisCIiACxwTiTv6wnaGR8vHg/Po4xn74Kksjh8TLVRAoh8QKL04L8oGRJHLBhBbq6lpewuQ3CZJTbynDDv64jaGR8ojTtdsZEcnSuBPMePL5M1684XQdHQdvmhbkFxKv//4jcsGEHtT29KUlTCYKH5+M3v36+nS2LUdN06tAKWUFDRHJ0ti0Klc2+x4tzoCeHh0Hb5gXJBIvjZQrWfW8F6vGQYBdL9FS7rTpITbYe5zO7HKw+CMiWRr71vU5V6KnyrwgkXhppLQOPlYN+6Dyr9JS7rTZmi5hP6czuyYs/ohIlkZCrY4vET1V5gWJxEsj5TiV11/FqmEfVP5VWsqdNq/z6/4JpzO7Jiz+iEiWxu6VfAr4jLxVmRckEi+NlNbBx6phH1T+VVrKnTZb0yXs53Rm14TFHxHJ0kioleMSgUNlXpBIvDRSHKm89BasGvZB5V+lpdxp8xK6Md7sdGbXhMUfEcnSOEY5051K0K3KvCCReGmktA4+Vg37oPKv0lLutNmaLmE/pzO7Jiz+iEiWRkKtvJfw/gFFu6il1XlBIvHSSPGm0vs+rBql9HrXaSl32vRSG+h9Tmd2RVj8EZEsjQPVNOZnKvOCROKlkdI6+Fg17IPKv0pLudNma7qE/ZzO7Jqw+CMiWRoJtbpwiYCfqcwLEomXRsqFVLreilXDPqj8q7SUO226kI31JqczuyYs/ohIlsaxyur/67l2ZY3VeUEi8dJIaR18rBpGcC8t0VLutNmaLmE/pzO7LCz+iEiWRkKtrl2i9U9U5gWJxEsj5Voqz9+NVcM+qPyrtJQ7bZ7zGu4dTmd2TVj8EZEsjcNVtvVPVOYFicRLI6V18LFq2AeVf5WWcqfN1nQJ+zmd2TVh8UdEsjQSanX5Ek1vVOYFicRLI+VyKk8+gFXDPqj8q7SUO22ewBrxZaczuyYs/ohIlsYRi+v+907t8u5X5wWJxEsjpXXwsWrsM3v9GS3lTput6RL2czqza8Pij4hkaSTUquISDe9T5gWJxEsjpSKVhx/BqmEfVP5VWsqdNg9Rjfmi05ldExZ/RCRL45jlbXifMi9IJF4aKa2Dj1XDPqj8q7SUO222pkvYz+nMrgmLPyKSpZFQq6pLNLtPmRckEi+NlKpUHnwIq4Z9UPlXaSl32jwANepLTmd2TVj8EZEsjaMWuNl9yrwgkXhppLQOPlYN+6Dyr9JS7rTZmi5hP6czuyYs/ohIlkZCrSov0eg+ZV6QSLw0UipTWfwYVg37oPKv0lLutFnENO4LTmd2TVj8EZEsjeOWGPxvq+fSzwsSiZdGSuvgY9XIaa19pKXcabM1XcJ+Tmd2hVj8EZEsjYRa1V6izW3KvCCReGmk1Kay9DmsGvZB5V+lpdxps0Rp4HWnM7smLP6ISJbGgWvc5scp84JE4qWR0jr4WDXsg8q/Sku502ZruoT9nM7smrD4IyJZGgm1qr9Ei/uUeUEi8dJIqU+l/UmsGvZB5V+lpdxp02Y09KrTmV0TFn9EJEvj0FVu8eOUeUEi8dJIaR18rBr2QeVfpaXcabM1XcJ+Tmd2TVj8EZEsjYRaAZdocJsyL0gkXhopQCrNj2LVsA8q/yot5U6bJqKxF53O7Jqw+CMiWRrHLnODH6fMCxKJl0ZK6+Bj1bAPKv8qLeVOm63pEvZzOrNrwuKPiGRpJNQKugTC8Lv684LE0BC5YELtHvatLmEyoaAZddYS6vk+H3Y6s4PH4o+IZGnsUz7/VeGvvuYFicSLeAh9tfiJmN3Ip6vE4mPVOHVy8gaaUadNf4MP806nM7sQLP6ISJbGYSpaEoJATOWfFyRGhsgFE2r3sG91CZPUlDtrWermgdedzuzgsYKGiGRpHLjGmzT0NmVekEi8qKMWE2r3sG+VWPx+JjVSmhxiUAFZQUNEsjQ2qUboJgjFZ7fNCxIDQ+SCCfUND/tdS5jUSGly/kApZQUNEcnS2KQaoZuAtynzgkTiRR21mFB7WPhWicXvZ1Ijpcn5AxWQFTREJEtjk2rEboJgpB6dsRjedr8NF0yob3jY7yJ2UT+TGilvrVGzABWQFTREJEtjDXzyZ7DblHlBIvGijlpMqD0sfKvE4vczqZHS5ECCCsgKGiKSpbFJNYI3QTjqZymFw5cYMKh+Bfm+5SVMaqQ0OX+glLKChohkaWxSjeBNoNuUeUEi8dJdSuvMYtXwTcjyu2gpd9psTZewn9OZXQMWf0QkSyOhVvglBNJiiFDRSLGIImtYNeyDyr9KOy6cNhGSnT7rdGbXhMUfEcnS2Kl+1y4rkBYvhIpGikUUWcOqYR9U/lXaceG0iZDs9FmnM7smLP6ISJbGTvW7dlnkm695QSLx0ki5lsDzd2PVsA8q/yot5U6b57yGe4fTmV0TFn9EJEvjcJU1BQEk5wUJQHn2BZELJtTuYd/qEiYTCppRZy3NLh570enMDh6LPyKSpXHsMmd1AMl5QQJQmIeQ/tlI+xRqukpLuTN0uXFv9Oh0ZpeNxR8RydJ4j5oD33zNCxKJF/H/12qk2KdQ01Vayp2hu8exslPpdGaXjcUfEcnSuKM67pN6lPOCrGeS2oLIBRNq97BvdQmT1Go6aznuSVJU5nRmB48VNEQkS2OR8Fgv1KOcF2Q9E+ohpLsU+xRqukpLuTN0Y50eLjVOZ3bZWPwRkSyNLtr931T/zde8IJF46S6ldaaxatgHlX+VlnKnzdZ0Cfs5ndk1YfFHRLI0EmrV5BLVLOcFWY3kuyuIXDChdg/7VpcwmVDQjDpr2aTnuZs4ndnBY/FHRLI0cstWf7VqlvOCrEby3RVELphQu4d9q0uYTChoRp21rG/0bp90OrODx+KPiGRp/Pp8uH99dis38H08DeTXFZRu5gdv/LDT7VwlckH6wOmm8LYlTCbvNKPOWnY8KWov7XRmJ43FHxHJ0njlhxQf3+dbn8FSzZIF8pnkao12TGNXl+CyhMmUE5pRZ8Zrz/WOn3M6s7uSxR8ROa7GNFj4Y+XK6NtVnQVSI6V4HCB9sKvl5SfLFJ9m1FnLYhbGfcHpzM4giz8icmyNH/yhUguTBVIjpXha1JbO7t4rq8sUn2bUWctiFsZ9wenMjh+LPyJydI30oVILkwVSI6V4WtSWzu7eK6vLFJ9m1FnLYhbGfcHpzI4fiz8icnyN5KFSC5MFUiOleFrUls7u3iuryxSfZtRZy2IWxn3B6cyOH4s/IvIOGj+YP1KphckCqZFSPC1qS2d375XVZYpPM+qsZTEL477gdGbHj8UfEXkHjf8xb1RqYbJAaqQUT4va0tnde2V1meLTjDprWczCuC84ndnxY/FHRN5B45Mu70alFiYLpEZK8bSoLZ3dvVdWlyk+zaizlsUsjPuC05kdPxZ/ROQdNCa6LJ1ftX+KmCZQfy+ldFwgfWB3sHd1meLTjDprWYrCwOtOZ3b0WPwRkXfQmOgOf5vCAvlsFqTedlIDV5fgsoTJFBKaUWfGBx4dJWlOZ3ZLsvgjIu+g8ZsubaZU0mSB1Egp9WrHUbtM8WlGnV1YzMK4LzidaaSclRAC+Y2XleZKpSx5T9CVCu2QRq8uwWUJkykpNKPOjJ8dOwO+7nRm9yWLPyLyDho3uqzblEqaLJAaKcVjorJydvNeWl2m+DSjzloWszDuC05ndv5Y/BGRd9D4Q5cktZImSV1qlUqFdkijV5fgsoTJlBSaUWfGx50cRWVOZ3ZfsvgjIu+g8YcuSWolTZI6jZRir3YctcsUn2bU2YXlMAz7itOZRspZBSGQG15SnCuVktQlzpUK7ZBGry7BZQmTKSk0o86Mnx07A77udGb3JYs/IvIOGn/okqRW0iSp00gpnxKVlbOb99LqMsWnGXXWshyGYV9xOrPzx+KPiLyDRo2UfX8g9baTGrjKCtgTUT8uS5hMIaEZddZy3xi3eOZ0Zrckiz8i8g4af+iSpFbSJKlLXVOp0A5p9OoSXJYwmZJCM+rM+C2GyF6k05ndlyz+iMg7aPyhS5JaSZOkLsXz8+A/FN/2Jew/O/9dNyKXysrZzXtpdQmTiQjNqLOW+9P6Fs+czuz8sfgjIu+g8YcuSWolTZI6btfU/oNnL/1A5FJZuRextb9dwmSCQzPqrCW3HZpczenMjiKLPyLyDho3uvqrjk0SfW0TJFpb2VgBe/rCxdp9fL66hMmEgWbUWctraR7i3U5nduhY/BGRd9C40SUprf0/5iR55K5AokUtW+KCi7X7+HyVWPx+JhMGmlGnTXI7tLic05kdOhZ/ROQdNH7THfwmhddsLWLt3gOJ1tYUrIA9LeFi7T4+X13CZMJAM+qspTvI47zR6cwOHYs/IvIOGhNd1kSpPpdYILm9gURrawoiF1ys3cfnq0uYTBhoRp215HZDk6s5ndmhY/FHRN5B45MubaJopOz6BonW1hSsgD1l42LtPj5fXcJkwkAz6qzlLqz3eOJ0ZoeOxR8ReQeNzIlSfS6xQHL7BonW1hRELrhYu4/PV5cwmTDQjDprye2GJldzOrNDx+KPiLyDRuI9Sv3/1WWBbBJr9yZItLamIHLBxdp9fL66hMmEgWbUWUt3kMd5o9OZHToWf0TkDTR+PD6JgaiFyQJJRPG8VC2Nfw1B5IKL/Sf72u+WMJmQ0Iw6a8nthiZXczqzA8jij4gcXiN3oNQfoiyQTWLt3gSJ1tYURC64WLuPz1eXMJkw0Iw6a+kO8jhvdDqzQ8fij4gcXCN7oHzV/rUUXrNRmwOJ1tYUrIA9seBi7T4+X13CZMJAM+qsJbUZ2lzM6cwOHYs/InJkjR8P6lde34mpZskC2SbX3l2qcfx2BJELLvZX9cXfLGEyMaEZddbSm+OB3ud0ZieQxR8ROajG5zTpME+ewatmyQLJbY5qHL8dQeSCi/1VffE3S5hMTGhGnbXkdkOTqzmd2Qlk8UdEsjRe/NdzmT+Q3wWlmiUL5E5t+JNqHL8dQeSCi/1VffE3S5hMTGhGnbUMb4D2F3A6sxPI4o+IZGlsX5qYHatZzgmyGsdvRxC54GJ/VV/8zRImExOaUWctYw6B0F2dzuwEsvgjIlkaQ6vUbvPqn87zmq2dWcdOSLS2piAGDBdr9/H56hImEwaaUWctHREe7S1OZ3boWPwRkSyNoxW2oKce5Zwg63nkliBywcVm0VcflzCZoNCMOmtZaOORl53O7Aiy+CMiWRpHLvKLtnqUc4Ks55FbgsgFF5tFX31cwmSCQjPqrOVL697lt05ndgRZ/BGRLI33KHj99168ZqOSRKK1NQUxYLhYu4/PV5cwmTDQjDprSW2GNhdzOrNDx+KPiGRpbFOO6F0AknOCBID89ASRCy7W7uPz1SVMJgw0o85aRh8IAfs7ndmhY/FHRLI0BtQmYEuA5JwgASA/PUHkgou1+/h8dQmTCQPNqLOWAWdA9JZOZ3boWPwRkSyN0YVqsj/wvRev2Zo49W6CRGtrCmLAcLF2H5+vLmEyYaAZddbSm+OB3ud0ZoeOxR8RydI4UE3LUgTyLxuEyNYUxIDhYu0+Pl9dwmTCQDPqrOXfvN7gudOZHToWf0QkS+MNag38ayzMZqOSRKK1NQUxYLhYu4/PV5cwmTDQjDprSW2GNhdzOrNDx+KPiGRpbFOO2F2Q7714zRbL4M/uSLS2piAGDBdr9/H56hImEwaaUWct/8T1Dk+dzuzQsfgjIlkaVew7EHjTiERrawpiwHCxdh+fry5hMmGgGXXW8i2w4y84ndmhY/FHRLI0jl9q7HsvXrNRSSLR2pqCGDBcrN3H56tLmEwYaEadtaQ2Q5uLOZ3ZoWPxR0SyNLYpR+gu0PdevGYLZfB3cyRaW1MQA4aLtfv4fHUJkwkDzaizln/zeoPnTmd26Fj8EZEsjbPXmtdsVJJItLamIAYMF2v38fnqEiYTBppRZy2pzdDmYk5nduhY/BGRLI1tyhG5C3aTwmu2SAZveyPR2pqCGDBcrN3H56tLmEwYaEadtXwL7PgLTmd26Fj8EZEsjZOXmthsVJJItLamIAYMF2v38fnqEiYTBppRZy2pzdDmYk5nduhY/BGRLI1tyhG4C3iTwmu2QAbvWyPR2pqCGDBcrN3H56tLmEwYaEadtXxP7PArTmd26Fj8EZEsjXNXmtlsVJJItLamIAYMF2v38fnqEiYTBppRZy2pzdDmYk5nduhY/BGRLI1tyhG3C3qTwmu2OAbGzki0tqYgBgwXa/fx+eoSJhMGmlFnLY3Ijr7kdGaHjsUfEcnSOHih4YnCazYqSSRaW1MQA4aLtfv4fHUJkwkDzaizltRmaHMxpzM7dCz+iEiWxjblCNsFQbgVf06Qt+KCi7X7+HyVWPx+JhMGmlGnzbADIW5jpzM7dCz+iEiWxrgStdgZv0nhNVsLv+49kGhtTUEMGC7W7uPz1SVMJgw0o85auoM8zhudzuzQsfgjIlkaxymppQQh+FP7OUHiYIhccLF2H5+vLmEyYaAZddbSaubB15zO7NCx+CMiWRqHrnODmxRes1FJItHamoIYMFys3cfnq0uYTBhoRp21pDZDm4s5ndmhY/FHRLI0tilHzC4tJgqv2WIYFHZForU1BTFguFi7j89XlzCZMNCMOmtZiO3Iy05nduhY/BGRLI0DF7nJROE1G5UkEq2tKYgBw8XafXy+uoTJhIFm1FlLajO0uZjTmR06Fn9EJEtjm3KE7ILg+1f4OUHibIhccLH/ynntd0uYTEhoRp21DDkQYjd1OrMDyOKPiGRpjC0TsnubmxResyFeL38WidbWFMSA4WLtPj5fXcJkwkAz6qzl5UD3/4DTmR06Fn9EJEtj/1IWFDSaKLxmK/iIWUaitTUFMWC4WLuPz1eXMJkw0Iw6axmT+tBdnc7s0LH4IyJZGkOrBGzeaqLwmg0we/2jSLS2piAGDBdr9/H56hImEwaaUWctrye6+yeczuzQsfgjIlkau1fSFtBsovCazTYStIpEa2sKYsBwsXYfn68uYTJhoBl11jIo9pHbOp3ZoWPxR0SyNEYWqX7vdhOF12z1bis+iURrawpiwHCxdh+fry5hMmGgGXXWsiLSvT/idGaHjsUfEcnS2LuQ5vUbThRes319fT5ovz7sZF9YJQYM6YMLjoy3LmEy+aYZddbSbOuxF53OjJQR+SMiaRkZsM4tJwqv2b6+kHrbSQ1cJQasH5clTKaQ0Iw6azngqXImyenMbkkWf0QkS+MZ6A6vN50ovGbTSCllBekDu4O9q8Qu6mcywaAZddosRWHgdaczO3os/ohIlsbxatx2ovCaTSOllCWkD+wO9q4Su6ifyQSDZtRpsxSFgdedzuzosfgjIlkah6tx44nCazaNlFKWkD6wO9i7SuyifiYTDJpRp81SFAZedzqzo8fij4hkaRysxp8P/AfP+6ITQSL13osmPFuCyxImU1hoRp0ZH+xY8chxOrNbk8UfEcnS6IHNe0/rWxRms+kupZQTpA/sDvauEruon8kEg2bUabMUhYHXnc7s6LH4IyJZGkeqcftbFGazaaSUsoT0gd3B3lViF/UzmWDQjDptlqIw8LrTmR09Fn9EJEvjODUOGSjEZtNIKWUJ6QO7g72rxC7qZzLBoBl12ixFYeB1pzM7eiz+iEiWxlFqHDRQiM2mkVLKEtIHdgd7V4ld1M9kgkEz6rRZisLA605ndvRY/BGRLI2j1Djgpyhb8YkgkXrbSQ1cXYLLEiZTSGhGnRkf5Vi5oMPpzG5JFn9EJEvjBeaxb0Vg2WXeVokgoywc2at+bQkuS5hMEaAZdWY89qwI2d3pzG44Fn9EJEtjSHVqNo26TSGCROptJzVwdQkuS5hMIaEZdWa85gTo/BmnM7slWfwRkSyNnev4cvmgmUIEidTbTmrg6hJcljCZQkIz6sz4S1/f5bdOZ3ZLsvgjIlkaByp4zEwhgkTqbSc1cHUJLkuYTCGhGXVmfKBjxSvF6cxuSRZ/RCRLY/EfZP/0lqLd+xBedqWZzaY/8VVKQkhdiwV/fYHVRU/n/UwmwzSjTpulKAy87nT2Gq9/v2fxR0R218gS8BKykNsUog+k3v/SSfrdElyWMJkCQzPqzPhLV9/lt05ndnuy+CMiu2v86HCbEjFTWCCfnYPU205q4OoSXJYwmUJCM+rM+F3myItOpzO7JVn8EZH9NfaYKQgxu9a8ZtNIeenP3W8Dqloo9t9lVhc97fYzmUzTjDpt7up/jydOZ38jtj1n8UdEDqCRJeElcQG3KUQXSL3tpAauLsFlCZMpJDSjzoy/9PRdfut0Zrckiz8icgCNPW5T2s8UFshn5yD1tpMauLoElyVMppDQjDozfpc58qLT6cxuSRZ/ROQIGlkaXur61XymEE0g9baTGri6BJclTKaQ0Iw6M/7a0jf5vdOZ3ZIs/ojIETT2uE1p/n/1WSCfjYPU205q4OoSXJYwmUJCM+rM+E3GyKtMpzO7JVn8EZFDaGSJeK1s69sUogek3nZSA1eJXIp/9+nR6FfxvwS6hMkUEppRZ8ZfO/omv3c6s1uSxR8ROYTGLrcpjWcKC+SzccKPTvsELh6odvp/Volcws+UYqMtYTIVlGa0iHoftvCSt7+A09neZ37G4o+IHEMjS8UuIG1nShcLOz/RT+piNhOXIoElTKZjjWa0iDofrttjdOYD9nc62/vMz1j8EZFjaOxym9L2ZxIskAEhd25ZF7OZuBQJLGEyHWs0o0XU+XDdHp3RHeltTmd7n/kZiz8ichCNXWZK09sUFsh+3VEXs5m4FAksYTIdazSjRdT5cN0e+3VD9ZWdzvY+8zMWf0TkKBpZOnZJaDlTuhjYuYl+UhezmbgUCSxhMh1rNKNF1Plw3R6jMx+wv9PZ3md+xuKPiBxFY5fblJZ/O4UFMiDkzi3rYjYTlyKBJUymY41mtIg6H67bozO6I73N6WzvMz9j8UdEDqORJWSfLgRdLvP22Ef/3k3sszpWM3EpEljCZMo5zWgR9b7rYhMfsrvT2d5nfsbij4gcRuPdb1NYIENi7tq0LmYzcSkSWMJkOtZoRouo8+G6PbqCO9abnM72PvMzFn9E5DgaWUr2AWv245Q+8vdmYp/VxWwmLkUCS5hMxxrNaBF1Ply3x9jEh+zudLb3mZ+x+CMix9HY5zal2Z8kZoEMiblr07qYzcSlSGAJk+lYoxktos6H6/boCu5Yb3I62/vMz1j8EZEDaWRJ2Ses1W1KH/V7L7HP6mI2E5cigSVMpmONZrSIOh+u22Ns4kN2dzrb+8zPWPwRkQNp7HSb0mimsECGxNy1aV3MZuJSJLCEyXSs0YwWUefDdXt0BXesNzmd7X3mZyz+iMiRNN56prBA9uuPupjNxKVIYAmT6VijGS2izofr9tivG6qv7HS295mfsfgjIofSyBLzJw4Iv1xrXrP9Ec97WoepU01DsBQJLGEyRZ1mtIj6t+G+fxNS5thNnc72PvMzFn9E5FAa73ybwgIZm/ej3etiNhOXIoElTKZjjWa0iDofrtvjUV4Hfc3pbO8zP2PxR0SOpZGl5k/aWvw4pZP0P04in9bFbCYuRQJLmEzHGs1oEXU+XLfHyLwH7e10tveZn7H4IyLH0tjpNqXFP8zCAhkUdMe2dTGbiUuRwBIm07FGM1pEnQ/X7dER29He4nS295mfsfgjIgfTyJLzN2cIwq3cvZT/dRL3vI7RTFyKBJYwmXJOM1pEnQ/X7TEu7WE7O53tfeZnLP6IyME03vc2hQUyLOqnG9fFbCYuRQJLmEzHGs1oEXU+XLfH09CO9wans73P/IzFHxE5mkaWnr9Rg3+c0kv4XyNxz+tiNhOXIoElTKZjjWa0iDofrttjXNrDdnY62/vMz1j8EZGjaex1mwL/OIUFMizqpxvXxWwmLkUCS5hMxxrNaBF1Ply3x9PQjvcGp7O9z/yMxR8ROZxGlqC3rCEUnxXvpvvNSNRCHaCZuBQJLGEyHWs0o0XU+XDdHqOyHriv09neZ37G4o+IHE7jXW9TWCADw36ydV3MZuJSJLCEyXSs0YwWUefDdXs8ieyILzud7X3mZyz+iMjxNN50prBA9uuSupjNxKVIYAmT6VijGS2izofr9tivG6qv7HS295mfsfgjIgfUyJL0FgqEI6/Z3mSzFurwdKtmAJYigSVMpmONZrSIOh+u22NAkaO3dDrb+8zPWPwRkQNqvOdtCgtkdOLL+9fFbCYuRQJLmEzHGs1oEXU+XLfHclqHfcXpbO8zP2PxR0SOqJGl6S11yJ8k7ib6zUXUQl3MZuJSJLCEyXSs0YwWUefDdXuMynrgvk5ne5/5GYs/InJEjd1uU5A/ScwCGRj2k63rYjYTlyKBJUymY41mtIg6H67b40lkR3zZ6WzvMz9j8UdEDqmRJeo9cfUo+2l+dxGzUsdmJi5FAkuYTMcazWgRdT5ct8eYpIfu6nS295mfsfgjIofUeMfbFBbI0Lgfbl4Xs5m4FAksYTIdazSjRdT5cN0eDwM75otOZ3uf+RmLPyJyTI0sVe+hq/5xSj/J7yZiVupiNhOXIoElTKZjjWa0iDofrttjTNJDd3U62/vMz1j8EZFjaux3m1L94xQWyNC4H25eF7OZuBQJLGEyHWs0o0XU+XDdHg8DO+aLTmd7n/kZiz8iclCNHWdKJU0WyH59UgdmJi5FAkuYTMcazWgRdT5ct8d+3VB9Zaezvc/8jMUfETmqRpau92RUfvXVT/C7hZiVupjNxKVIYAmT6VijGS2izofr9hiT9NBdnc72PvMzFn9E5KgaO96m1M0UFsjQuB9uXhezmbgUCSxhMh1rNKNF1Plw3R4PAzvmi05ne5/5GYs/InJYjSxhRu6qZkpHvYaFiKW6mM3EpUhgCZPpWKMZLaLOh+v2GJHz4D2dzvY+8zMWf0TksBo73qZ81QBlgQwO/MH2NVSIh9CB8lYvFQnMVPyiyXSs0YweqsgH7H//taoscR+ns38eX3/H4o+IHFcjS5mRpprblI5yDQcRS3Uxm4lLkcASJtPRRjNaRP16wGqkRPR52tOJf1+Mn2esjFzX2PM2pWKmsEBGheh83+slTBmbiUuRwBImqdUsov45t34ezlM73DuczvY+8zNW0BCRA2tkSbNCdx1pT7WWg/Zr15mkRpiJS5HAEiap1Syizofr9tg+5eE7Op3tfeZnrKAhIgfWeK/bFBbI8MgXL1AXs5m4FAksYTIdazSjRdT5cN0ei2Ed9wWns73P/IzFHxE5skaWNit+l7/66inWMtB+rS5mM3EpEljCZDrWaEaLqPPhuj22T3n4jk5ne5/5GYs/InJkjT1vUy7/wywskOGRL16gLmYzcSkSWMJkOtZoRouo8+G6PRbDOu4LTmd7n/kZiz8icmiNXWfKRaoskP165SKQny6YiUuRwBImU0FpRouo8+G6PfbrhuorO53tfeZnLP6IyLE1stRZ+bj41VdPqZb89mt1MZuJS5HAEibTsUYzWkSdD9ftsX3Kw3d0Otv7zM9Y/BGRY2vseptybaawQIZHvniBupjNxKVIYAmT6VijGS2izofr9lgM67gvOJ3tfeZnLP6IyME1suSZCbw0U7oqNeW3XqyL2UxcigSWMJmONZrRIup8uG6PrTNO2M/pbO8zP2PxR0QOrrHrbcqlv0PKAkkIfeESdTGbiUuRwBIm07FGM1pEnQ/X7bEQ1ZGXnc72PvMzEv9L/2c6a8uPJI2XTuesLT12nSlXqs8C2a9brtD4V8KJuJQbrWtKGyfisMwso2XU/5L1/N3/DI5lvqyaac0AAAAASUVORK5CYII='></image>
                    </motion.g>
                  </motion.g>
                </g>
              </svg>
            </motion.div>
          </div>
          <h1 className='text-3xl md:text-4xl font-black leading-tight pt-4 pb-4 md:pb-8 text-white-50'>
            Racing Soon....
          </h1>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
