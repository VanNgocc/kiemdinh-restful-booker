/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 5204.0, "series": [{"data": [[0.0, 3.0], [0.1, 6.0], [0.2, 7.0], [0.3, 7.0], [0.4, 8.0], [0.5, 8.0], [0.6, 9.0], [0.7, 9.0], [0.8, 9.0], [0.9, 9.0], [1.0, 9.0], [1.1, 9.0], [1.2, 9.0], [1.3, 10.0], [1.4, 10.0], [1.5, 10.0], [1.6, 10.0], [1.7, 10.0], [1.8, 10.0], [1.9, 10.0], [2.0, 10.0], [2.1, 10.0], [2.2, 10.0], [2.3, 10.0], [2.4, 10.0], [2.5, 10.0], [2.6, 11.0], [2.7, 11.0], [2.8, 11.0], [2.9, 11.0], [3.0, 11.0], [3.1, 11.0], [3.2, 11.0], [3.3, 11.0], [3.4, 11.0], [3.5, 11.0], [3.6, 11.0], [3.7, 11.0], [3.8, 11.0], [3.9, 11.0], [4.0, 11.0], [4.1, 11.0], [4.2, 12.0], [4.3, 12.0], [4.4, 12.0], [4.5, 12.0], [4.6, 12.0], [4.7, 12.0], [4.8, 12.0], [4.9, 12.0], [5.0, 12.0], [5.1, 12.0], [5.2, 12.0], [5.3, 12.0], [5.4, 12.0], [5.5, 12.0], [5.6, 12.0], [5.7, 12.0], [5.8, 13.0], [5.9, 13.0], [6.0, 13.0], [6.1, 13.0], [6.2, 13.0], [6.3, 13.0], [6.4, 13.0], [6.5, 13.0], [6.6, 13.0], [6.7, 13.0], [6.8, 13.0], [6.9, 13.0], [7.0, 14.0], [7.1, 14.0], [7.2, 14.0], [7.3, 14.0], [7.4, 14.0], [7.5, 14.0], [7.6, 15.0], [7.7, 15.0], [7.8, 15.0], [7.9, 15.0], [8.0, 16.0], [8.1, 16.0], [8.2, 17.0], [8.3, 17.0], [8.4, 17.0], [8.5, 18.0], [8.6, 18.0], [8.7, 19.0], [8.8, 21.0], [8.9, 22.0], [9.0, 23.0], [9.1, 23.0], [9.2, 23.0], [9.3, 24.0], [9.4, 24.0], [9.5, 24.0], [9.6, 24.0], [9.7, 25.0], [9.8, 25.0], [9.9, 25.0], [10.0, 25.0], [10.1, 25.0], [10.2, 25.0], [10.3, 25.0], [10.4, 25.0], [10.5, 25.0], [10.6, 25.0], [10.7, 26.0], [10.8, 26.0], [10.9, 26.0], [11.0, 26.0], [11.1, 26.0], [11.2, 26.0], [11.3, 26.0], [11.4, 26.0], [11.5, 26.0], [11.6, 26.0], [11.7, 26.0], [11.8, 26.0], [11.9, 26.0], [12.0, 27.0], [12.1, 27.0], [12.2, 27.0], [12.3, 27.0], [12.4, 27.0], [12.5, 27.0], [12.6, 27.0], [12.7, 27.0], [12.8, 27.0], [12.9, 27.0], [13.0, 27.0], [13.1, 27.0], [13.2, 27.0], [13.3, 27.0], [13.4, 28.0], [13.5, 28.0], [13.6, 28.0], [13.7, 28.0], [13.8, 28.0], [13.9, 28.0], [14.0, 28.0], [14.1, 28.0], [14.2, 28.0], [14.3, 28.0], [14.4, 28.0], [14.5, 28.0], [14.6, 28.0], [14.7, 29.0], [14.8, 29.0], [14.9, 29.0], [15.0, 29.0], [15.1, 29.0], [15.2, 29.0], [15.3, 29.0], [15.4, 29.0], [15.5, 29.0], [15.6, 29.0], [15.7, 29.0], [15.8, 30.0], [15.9, 30.0], [16.0, 30.0], [16.1, 30.0], [16.2, 30.0], [16.3, 30.0], [16.4, 31.0], [16.5, 31.0], [16.6, 31.0], [16.7, 31.0], [16.8, 31.0], [16.9, 32.0], [17.0, 32.0], [17.1, 33.0], [17.2, 33.0], [17.3, 34.0], [17.4, 35.0], [17.5, 38.0], [17.6, 40.0], [17.7, 40.0], [17.8, 41.0], [17.9, 41.0], [18.0, 42.0], [18.1, 42.0], [18.2, 43.0], [18.3, 43.0], [18.4, 43.0], [18.5, 44.0], [18.6, 44.0], [18.7, 44.0], [18.8, 44.0], [18.9, 44.0], [19.0, 45.0], [19.1, 45.0], [19.2, 45.0], [19.3, 46.0], [19.4, 46.0], [19.5, 47.0], [19.6, 48.0], [19.7, 50.0], [19.8, 54.0], [19.9, 56.0], [20.0, 57.0], [20.1, 58.0], [20.2, 59.0], [20.3, 59.0], [20.4, 60.0], [20.5, 60.0], [20.6, 61.0], [20.7, 61.0], [20.8, 62.0], [20.9, 64.0], [21.0, 66.0], [21.1, 71.0], [21.2, 73.0], [21.3, 74.0], [21.4, 74.0], [21.5, 75.0], [21.6, 75.0], [21.7, 76.0], [21.8, 77.0], [21.9, 77.0], [22.0, 80.0], [22.1, 85.0], [22.2, 87.0], [22.3, 88.0], [22.4, 89.0], [22.5, 90.0], [22.6, 90.0], [22.7, 91.0], [22.8, 92.0], [22.9, 92.0], [23.0, 93.0], [23.1, 100.0], [23.2, 103.0], [23.3, 104.0], [23.4, 104.0], [23.5, 105.0], [23.6, 105.0], [23.7, 105.0], [23.8, 106.0], [23.9, 107.0], [24.0, 108.0], [24.1, 117.0], [24.2, 119.0], [24.3, 119.0], [24.4, 120.0], [24.5, 121.0], [24.6, 122.0], [24.7, 124.0], [24.8, 126.0], [24.9, 129.0], [25.0, 135.0], [25.1, 136.0], [25.2, 136.0], [25.3, 137.0], [25.4, 138.0], [25.5, 138.0], [25.6, 138.0], [25.7, 139.0], [25.8, 141.0], [25.9, 143.0], [26.0, 149.0], [26.1, 150.0], [26.2, 151.0], [26.3, 152.0], [26.4, 152.0], [26.5, 153.0], [26.6, 153.0], [26.7, 153.0], [26.8, 154.0], [26.9, 155.0], [27.0, 155.0], [27.1, 156.0], [27.2, 162.0], [27.3, 165.0], [27.4, 166.0], [27.5, 167.0], [27.6, 167.0], [27.7, 168.0], [27.8, 168.0], [27.9, 168.0], [28.0, 169.0], [28.1, 170.0], [28.2, 171.0], [28.3, 172.0], [28.4, 172.0], [28.5, 175.0], [28.6, 179.0], [28.7, 181.0], [28.8, 181.0], [28.9, 182.0], [29.0, 182.0], [29.1, 182.0], [29.2, 182.0], [29.3, 183.0], [29.4, 183.0], [29.5, 183.0], [29.6, 183.0], [29.7, 184.0], [29.8, 184.0], [29.9, 185.0], [30.0, 185.0], [30.1, 185.0], [30.2, 186.0], [30.3, 186.0], [30.4, 186.0], [30.5, 187.0], [30.6, 187.0], [30.7, 187.0], [30.8, 188.0], [30.9, 189.0], [31.0, 194.0], [31.1, 195.0], [31.2, 196.0], [31.3, 196.0], [31.4, 197.0], [31.5, 197.0], [31.6, 197.0], [31.7, 198.0], [31.8, 198.0], [31.9, 198.0], [32.0, 198.0], [32.1, 198.0], [32.2, 198.0], [32.3, 199.0], [32.4, 199.0], [32.5, 199.0], [32.6, 199.0], [32.7, 199.0], [32.8, 200.0], [32.9, 200.0], [33.0, 200.0], [33.1, 201.0], [33.2, 201.0], [33.3, 202.0], [33.4, 202.0], [33.5, 202.0], [33.6, 203.0], [33.7, 204.0], [33.8, 207.0], [33.9, 210.0], [34.0, 211.0], [34.1, 212.0], [34.2, 212.0], [34.3, 213.0], [34.4, 213.0], [34.5, 213.0], [34.6, 213.0], [34.7, 214.0], [34.8, 214.0], [34.9, 214.0], [35.0, 215.0], [35.1, 215.0], [35.2, 216.0], [35.3, 216.0], [35.4, 217.0], [35.5, 217.0], [35.6, 218.0], [35.7, 220.0], [35.8, 227.0], [35.9, 227.0], [36.0, 228.0], [36.1, 228.0], [36.2, 229.0], [36.3, 229.0], [36.4, 230.0], [36.5, 230.0], [36.6, 231.0], [36.7, 231.0], [36.8, 232.0], [36.9, 232.0], [37.0, 233.0], [37.1, 235.0], [37.2, 241.0], [37.3, 243.0], [37.4, 243.0], [37.5, 244.0], [37.6, 244.0], [37.7, 245.0], [37.8, 245.0], [37.9, 245.0], [38.0, 245.0], [38.1, 246.0], [38.2, 246.0], [38.3, 246.0], [38.4, 247.0], [38.5, 247.0], [38.6, 247.0], [38.7, 248.0], [38.8, 248.0], [38.9, 248.0], [39.0, 249.0], [39.1, 250.0], [39.2, 253.0], [39.3, 257.0], [39.4, 258.0], [39.5, 259.0], [39.6, 259.0], [39.7, 259.0], [39.8, 260.0], [39.9, 260.0], [40.0, 260.0], [40.1, 260.0], [40.2, 261.0], [40.3, 261.0], [40.4, 261.0], [40.5, 261.0], [40.6, 262.0], [40.7, 262.0], [40.8, 262.0], [40.9, 262.0], [41.0, 263.0], [41.1, 263.0], [41.2, 263.0], [41.3, 264.0], [41.4, 264.0], [41.5, 264.0], [41.6, 264.0], [41.7, 265.0], [41.8, 266.0], [41.9, 270.0], [42.0, 273.0], [42.1, 274.0], [42.2, 274.0], [42.3, 274.0], [42.4, 274.0], [42.5, 275.0], [42.6, 275.0], [42.7, 275.0], [42.8, 275.0], [42.9, 275.0], [43.0, 276.0], [43.1, 276.0], [43.2, 276.0], [43.3, 276.0], [43.4, 276.0], [43.5, 276.0], [43.6, 277.0], [43.7, 277.0], [43.8, 277.0], [43.9, 277.0], [44.0, 278.0], [44.1, 278.0], [44.2, 278.0], [44.3, 278.0], [44.4, 279.0], [44.5, 279.0], [44.6, 279.0], [44.7, 280.0], [44.8, 280.0], [44.9, 281.0], [45.0, 282.0], [45.1, 287.0], [45.2, 289.0], [45.3, 289.0], [45.4, 289.0], [45.5, 290.0], [45.6, 290.0], [45.7, 290.0], [45.8, 290.0], [45.9, 291.0], [46.0, 291.0], [46.1, 291.0], [46.2, 291.0], [46.3, 291.0], [46.4, 291.0], [46.5, 292.0], [46.6, 292.0], [46.7, 292.0], [46.8, 292.0], [46.9, 292.0], [47.0, 292.0], [47.1, 293.0], [47.2, 293.0], [47.3, 293.0], [47.4, 293.0], [47.5, 293.0], [47.6, 293.0], [47.7, 293.0], [47.8, 294.0], [47.9, 294.0], [48.0, 294.0], [48.1, 294.0], [48.2, 295.0], [48.3, 295.0], [48.4, 295.0], [48.5, 296.0], [48.6, 302.0], [48.7, 303.0], [48.8, 304.0], [48.9, 305.0], [49.0, 305.0], [49.1, 305.0], [49.2, 305.0], [49.3, 306.0], [49.4, 306.0], [49.5, 306.0], [49.6, 306.0], [49.7, 306.0], [49.8, 306.0], [49.9, 306.0], [50.0, 307.0], [50.1, 307.0], [50.2, 307.0], [50.3, 307.0], [50.4, 307.0], [50.5, 307.0], [50.6, 307.0], [50.7, 307.0], [50.8, 307.0], [50.9, 308.0], [51.0, 308.0], [51.1, 308.0], [51.2, 308.0], [51.3, 308.0], [51.4, 308.0], [51.5, 308.0], [51.6, 308.0], [51.7, 308.0], [51.8, 309.0], [51.9, 309.0], [52.0, 309.0], [52.1, 309.0], [52.2, 309.0], [52.3, 310.0], [52.4, 310.0], [52.5, 310.0], [52.6, 310.0], [52.7, 311.0], [52.8, 312.0], [52.9, 315.0], [53.0, 319.0], [53.1, 320.0], [53.2, 320.0], [53.3, 321.0], [53.4, 321.0], [53.5, 321.0], [53.6, 321.0], [53.7, 321.0], [53.8, 322.0], [53.9, 322.0], [54.0, 322.0], [54.1, 322.0], [54.2, 322.0], [54.3, 322.0], [54.4, 322.0], [54.5, 322.0], [54.6, 323.0], [54.7, 323.0], [54.8, 323.0], [54.9, 323.0], [55.0, 323.0], [55.1, 323.0], [55.2, 323.0], [55.3, 324.0], [55.4, 324.0], [55.5, 324.0], [55.6, 324.0], [55.7, 324.0], [55.8, 324.0], [55.9, 325.0], [56.0, 325.0], [56.1, 325.0], [56.2, 325.0], [56.3, 326.0], [56.4, 326.0], [56.5, 326.0], [56.6, 327.0], [56.7, 328.0], [56.8, 334.0], [56.9, 335.0], [57.0, 336.0], [57.1, 336.0], [57.2, 336.0], [57.3, 336.0], [57.4, 337.0], [57.5, 337.0], [57.6, 337.0], [57.7, 337.0], [57.8, 337.0], [57.9, 338.0], [58.0, 338.0], [58.1, 338.0], [58.2, 338.0], [58.3, 338.0], [58.4, 338.0], [58.5, 339.0], [58.6, 339.0], [58.7, 339.0], [58.8, 339.0], [58.9, 339.0], [59.0, 339.0], [59.1, 340.0], [59.2, 340.0], [59.3, 340.0], [59.4, 340.0], [59.5, 341.0], [59.6, 341.0], [59.7, 341.0], [59.8, 342.0], [59.9, 342.0], [60.0, 345.0], [60.1, 349.0], [60.2, 350.0], [60.3, 351.0], [60.4, 351.0], [60.5, 352.0], [60.6, 352.0], [60.7, 352.0], [60.8, 352.0], [60.9, 353.0], [61.0, 353.0], [61.1, 353.0], [61.2, 353.0], [61.3, 354.0], [61.4, 354.0], [61.5, 354.0], [61.6, 354.0], [61.7, 354.0], [61.8, 354.0], [61.9, 355.0], [62.0, 355.0], [62.1, 355.0], [62.2, 355.0], [62.3, 355.0], [62.4, 356.0], [62.5, 356.0], [62.6, 356.0], [62.7, 357.0], [62.8, 357.0], [62.9, 357.0], [63.0, 358.0], [63.1, 359.0], [63.2, 360.0], [63.3, 364.0], [63.4, 365.0], [63.5, 366.0], [63.6, 366.0], [63.7, 367.0], [63.8, 367.0], [63.9, 368.0], [64.0, 368.0], [64.1, 368.0], [64.2, 368.0], [64.3, 369.0], [64.4, 369.0], [64.5, 369.0], [64.6, 369.0], [64.7, 369.0], [64.8, 370.0], [64.9, 370.0], [65.0, 370.0], [65.1, 370.0], [65.2, 370.0], [65.3, 371.0], [65.4, 371.0], [65.5, 371.0], [65.6, 371.0], [65.7, 372.0], [65.8, 372.0], [65.9, 373.0], [66.0, 373.0], [66.1, 374.0], [66.2, 374.0], [66.3, 376.0], [66.4, 380.0], [66.5, 381.0], [66.6, 381.0], [66.7, 382.0], [66.8, 382.0], [66.9, 383.0], [67.0, 383.0], [67.1, 383.0], [67.2, 384.0], [67.3, 384.0], [67.4, 384.0], [67.5, 385.0], [67.6, 385.0], [67.7, 385.0], [67.8, 385.0], [67.9, 386.0], [68.0, 386.0], [68.1, 386.0], [68.2, 386.0], [68.3, 387.0], [68.4, 387.0], [68.5, 388.0], [68.6, 388.0], [68.7, 389.0], [68.8, 389.0], [68.9, 391.0], [69.0, 396.0], [69.1, 397.0], [69.2, 397.0], [69.3, 398.0], [69.4, 398.0], [69.5, 398.0], [69.6, 399.0], [69.7, 399.0], [69.8, 400.0], [69.9, 400.0], [70.0, 401.0], [70.1, 401.0], [70.2, 401.0], [70.3, 402.0], [70.4, 402.0], [70.5, 403.0], [70.6, 403.0], [70.7, 404.0], [70.8, 405.0], [70.9, 409.0], [71.0, 412.0], [71.1, 413.0], [71.2, 413.0], [71.3, 414.0], [71.4, 415.0], [71.5, 415.0], [71.6, 416.0], [71.7, 417.0], [71.8, 417.0], [71.9, 418.0], [72.0, 419.0], [72.1, 420.0], [72.2, 422.0], [72.3, 426.0], [72.4, 427.0], [72.5, 429.0], [72.6, 430.0], [72.7, 430.0], [72.8, 431.0], [72.9, 432.0], [73.0, 433.0], [73.1, 434.0], [73.2, 435.0], [73.3, 439.0], [73.4, 443.0], [73.5, 445.0], [73.6, 446.0], [73.7, 446.0], [73.8, 447.0], [73.9, 449.0], [74.0, 450.0], [74.1, 451.0], [74.2, 452.0], [74.3, 458.0], [74.4, 460.0], [74.5, 460.0], [74.6, 461.0], [74.7, 461.0], [74.8, 462.0], [74.9, 463.0], [75.0, 464.0], [75.1, 465.0], [75.2, 465.0], [75.3, 466.0], [75.4, 467.0], [75.5, 469.0], [75.6, 474.0], [75.7, 475.0], [75.8, 476.0], [75.9, 476.0], [76.0, 477.0], [76.1, 477.0], [76.2, 478.0], [76.3, 479.0], [76.4, 480.0], [76.5, 481.0], [76.6, 482.0], [76.7, 484.0], [76.8, 487.0], [76.9, 490.0], [77.0, 491.0], [77.1, 492.0], [77.2, 493.0], [77.3, 494.0], [77.4, 495.0], [77.5, 496.0], [77.6, 497.0], [77.7, 498.0], [77.8, 500.0], [77.9, 503.0], [78.0, 506.0], [78.1, 507.0], [78.2, 508.0], [78.3, 509.0], [78.4, 509.0], [78.5, 510.0], [78.6, 511.0], [78.7, 512.0], [78.8, 512.0], [78.9, 514.0], [79.0, 515.0], [79.1, 518.0], [79.2, 521.0], [79.3, 522.0], [79.4, 524.0], [79.5, 524.0], [79.6, 525.0], [79.7, 526.0], [79.8, 526.0], [79.9, 527.0], [80.0, 528.0], [80.1, 529.0], [80.2, 532.0], [80.3, 535.0], [80.4, 537.0], [80.5, 538.0], [80.6, 539.0], [80.7, 540.0], [80.8, 541.0], [80.9, 541.0], [81.0, 542.0], [81.1, 543.0], [81.2, 544.0], [81.3, 545.0], [81.4, 548.0], [81.5, 552.0], [81.6, 553.0], [81.7, 554.0], [81.8, 555.0], [81.9, 556.0], [82.0, 557.0], [82.1, 557.0], [82.2, 559.0], [82.3, 560.0], [82.4, 563.0], [82.5, 568.0], [82.6, 570.0], [82.7, 570.0], [82.8, 571.0], [82.9, 572.0], [83.0, 573.0], [83.1, 573.0], [83.2, 574.0], [83.3, 577.0], [83.4, 583.0], [83.5, 585.0], [83.6, 586.0], [83.7, 586.0], [83.8, 587.0], [83.9, 588.0], [84.0, 588.0], [84.1, 589.0], [84.2, 589.0], [84.3, 591.0], [84.4, 597.0], [84.5, 600.0], [84.6, 600.0], [84.7, 601.0], [84.8, 602.0], [84.9, 602.0], [85.0, 603.0], [85.1, 604.0], [85.2, 604.0], [85.3, 604.0], [85.4, 605.0], [85.5, 606.0], [85.6, 607.0], [85.7, 613.0], [85.8, 615.0], [85.9, 616.0], [86.0, 616.0], [86.1, 617.0], [86.2, 618.0], [86.3, 618.0], [86.4, 619.0], [86.5, 619.0], [86.6, 620.0], [86.7, 620.0], [86.8, 621.0], [86.9, 622.0], [87.0, 625.0], [87.1, 631.0], [87.2, 632.0], [87.3, 633.0], [87.4, 633.0], [87.5, 634.0], [87.6, 634.0], [87.7, 635.0], [87.8, 636.0], [87.9, 636.0], [88.0, 638.0], [88.1, 645.0], [88.2, 647.0], [88.3, 648.0], [88.4, 648.0], [88.5, 649.0], [88.6, 650.0], [88.7, 650.0], [88.8, 651.0], [88.9, 652.0], [89.0, 654.0], [89.1, 661.0], [89.2, 663.0], [89.3, 664.0], [89.4, 665.0], [89.5, 666.0], [89.6, 667.0], [89.7, 668.0], [89.8, 677.0], [89.9, 678.0], [90.0, 679.0], [90.1, 680.0], [90.2, 681.0], [90.3, 682.0], [90.4, 683.0], [90.5, 691.0], [90.6, 694.0], [90.7, 695.0], [90.8, 696.0], [90.9, 696.0], [91.0, 697.0], [91.1, 699.0], [91.2, 707.0], [91.3, 709.0], [91.4, 710.0], [91.5, 711.0], [91.6, 712.0], [91.7, 713.0], [91.8, 715.0], [91.9, 722.0], [92.0, 724.0], [92.1, 725.0], [92.2, 726.0], [92.3, 727.0], [92.4, 728.0], [92.5, 728.0], [92.6, 730.0], [92.7, 733.0], [92.8, 738.0], [92.9, 740.0], [93.0, 741.0], [93.1, 743.0], [93.2, 744.0], [93.3, 745.0], [93.4, 752.0], [93.5, 755.0], [93.6, 758.0], [93.7, 760.0], [93.8, 768.0], [93.9, 772.0], [94.0, 775.0], [94.1, 778.0], [94.2, 786.0], [94.3, 788.0], [94.4, 796.0], [94.5, 801.0], [94.6, 806.0], [94.7, 813.0], [94.8, 818.0], [94.9, 821.0], [95.0, 829.0], [95.1, 834.0], [95.2, 838.0], [95.3, 848.0], [95.4, 854.0], [95.5, 863.0], [95.6, 868.0], [95.7, 870.0], [95.8, 881.0], [95.9, 884.0], [96.0, 885.0], [96.1, 896.0], [96.2, 899.0], [96.3, 901.0], [96.4, 911.0], [96.5, 914.0], [96.6, 917.0], [96.7, 927.0], [96.8, 932.0], [96.9, 942.0], [97.0, 946.0], [97.1, 957.0], [97.2, 959.0], [97.3, 967.0], [97.4, 974.0], [97.5, 980.0], [97.6, 990.0], [97.7, 996.0], [97.8, 1006.0], [97.9, 1013.0], [98.0, 1023.0], [98.1, 1031.0], [98.2, 1042.0], [98.3, 1052.0], [98.4, 1065.0], [98.5, 1076.0], [98.6, 1086.0], [98.7, 1100.0], [98.8, 1133.0], [98.9, 1272.0], [99.0, 1417.0], [99.1, 1522.0], [99.2, 1658.0], [99.3, 1770.0], [99.4, 2141.0], [99.5, 2857.0], [99.6, 3615.0], [99.7, 3884.0], [99.8, 4291.0], [99.9, 4702.0], [100.0, 5204.0]], "isOverall": false, "label": "POST /booking/", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 8192.0, "series": [{"data": [[0.0, 8192.0], [600.0, 2348.0], [700.0, 1190.0], [800.0, 628.0], [900.0, 534.0], [1000.0, 337.0], [1100.0, 60.0], [1200.0, 20.0], [1300.0, 29.0], [1400.0, 34.0], [1500.0, 24.0], [1600.0, 27.0], [1700.0, 29.0], [1800.0, 17.0], [1900.0, 4.0], [2000.0, 6.0], [2100.0, 6.0], [2300.0, 3.0], [2200.0, 6.0], [2400.0, 7.0], [2500.0, 6.0], [2600.0, 6.0], [2800.0, 5.0], [2700.0, 1.0], [2900.0, 4.0], [3000.0, 2.0], [3100.0, 4.0], [3300.0, 5.0], [3200.0, 4.0], [3400.0, 4.0], [3500.0, 8.0], [3600.0, 12.0], [3700.0, 8.0], [3800.0, 28.0], [3900.0, 13.0], [4000.0, 5.0], [4100.0, 6.0], [4200.0, 3.0], [4300.0, 12.0], [4600.0, 9.0], [4400.0, 8.0], [4500.0, 5.0], [4700.0, 27.0], [4800.0, 7.0], [5100.0, 1.0], [5200.0, 1.0], [100.0, 3409.0], [200.0, 5631.0], [300.0, 7519.0], [400.0, 2843.0], [500.0, 2377.0]], "isOverall": false, "label": "POST /booking/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 323.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 27605.0, "series": [{"data": [[0.0, 27605.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 7546.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 323.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 56.23944361649278, "minX": 1.79343756E12, "maxY": 200.0, "series": [{"data": [[1.79343768E12, 200.0], [1.79343756E12, 56.23944361649278], [1.79343774E12, 196.7361088074308], [1.79343762E12, 169.27169042769813]], "isOverall": false, "label": "Guest: POST /booking/", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79343774E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 10.0, "minX": 2.0, "maxY": 1301.3000000000002, "series": [{"data": [[2.0, 55.0], [3.0, 11.0], [4.0, 20.5], [5.0, 12.5], [6.0, 17.666666666666668], [7.0, 14.333333333333334], [8.0, 15.4], [9.0, 444.00000000000006], [10.0, 599.0], [11.0, 1301.3000000000002], [12.0, 14.833333333333332], [13.0, 13.625], [14.0, 277.57142857142856], [15.0, 536.1666666666666], [16.0, 10.777777777777779], [17.0, 444.2], [18.0, 596.0769230769231], [19.0, 374.4615384615385], [20.0, 13.666666666666668], [21.0, 13.416666666666668], [22.0, 344.38461538461536], [23.0, 843.6875000000001], [24.0, 11.357142857142858], [25.0, 375.8125], [26.0, 11.600000000000001], [27.0, 372.22222222222223], [28.0, 168.375], [29.0, 10.823529411764707], [30.0, 12.294117647058824], [31.0, 473.35], [32.0, 100.25000000000001], [33.0, 12.444444444444445], [34.0, 11.85], [35.0, 11.526315789473685], [36.0, 11.095238095238095], [37.0, 133.13043478260872], [38.0, 613.0769230769231], [39.0, 10.0], [40.0, 65.41666666666667], [41.0, 10.695652173913045], [42.0, 187.07999999999998], [43.0, 261.9230769230769], [44.0, 323.9310344827586], [45.0, 14.20833333333333], [46.0, 12.407407407407408], [47.0, 311.82758620689657], [48.0, 11.928571428571427], [49.0, 12.10344827586207], [50.0, 341.34482758620686], [51.0, 410.11764705882354], [52.0, 67.22222222222223], [53.0, 236.97142857142856], [54.0, 143.96969696969697], [55.0, 146.3125], [56.0, 135.8529411764706], [57.0, 157.20000000000002], [58.0, 109.21052631578948], [59.0, 14.088235294117645], [60.0, 128.66666666666666], [61.0, 264.68571428571425], [62.0, 15.486486486486486], [63.0, 270.3142857142857], [64.0, 145.68571428571428], [65.0, 112.84782608695653], [66.0, 14.21875], [67.0, 17.400000000000002], [68.0, 16.46341463414634], [69.0, 18.666666666666668], [70.0, 19.289473684210527], [71.0, 483.31111111111113], [72.0, 40.08333333333333], [73.0, 40.6], [74.0, 18.063829787234038], [75.0, 16.02272727272727], [76.0, 235.25531914893617], [77.0, 36.28260869565217], [78.0, 36.80487804878049], [79.0, 20.95744680851064], [80.0, 17.780487804878046], [81.0, 16.943396226415093], [82.0, 17.58695652173913], [83.0, 407.78431372549016], [84.0, 20.24], [85.0, 148.15555555555557], [86.0, 23.057692307692317], [87.0, 137.75510204081633], [88.0, 41.186440677966104], [89.0, 43.729166666666664], [90.0, 42.12962962962963], [91.0, 44.25490196078431], [92.0, 19.039215686274513], [93.0, 18.886792452830186], [94.0, 18.98148148148148], [95.0, 221.96774193548387], [96.0, 112.7450980392157], [97.0, 107.9], [98.0, 124.58333333333334], [99.0, 50.1111111111111], [100.0, 19.333333333333332], [101.0, 215.73333333333335], [102.0, 112.38461538461539], [103.0, 127.01515151515152], [104.0, 110.54545454545456], [105.0, 23.21538461538461], [106.0, 22.13207547169812], [107.0, 147.66197183098592], [108.0, 56.16071428571428], [109.0, 25.546875000000007], [110.0, 196.83928571428572], [111.0, 77.52112676056339], [112.0, 102.96666666666667], [113.0, 30.09230769230769], [114.0, 128.18840579710144], [115.0, 77.1846153846154], [116.0, 64.98484848484848], [117.0, 27.03174603174602], [118.0, 21.918918918918923], [119.0, 207.72307692307692], [120.0, 91.47826086956522], [121.0, 20.028169014084515], [122.0, 128.1830985915493], [123.0, 20.450704225352112], [124.0, 128.30555555555554], [125.0, 62.97333333333333], [126.0, 20.95588235294118], [127.0, 24.17105263157894], [128.0, 194.87671232876713], [129.0, 22.901408450704228], [130.0, 24.23076923076923], [131.0, 170.24358974358972], [132.0, 25.356164383561637], [133.0, 22.597402597402606], [134.0, 170.55555555555554], [135.0, 24.356164383561648], [136.0, 29.219178082191778], [137.0, 169.91764705882352], [138.0, 72.4875], [139.0, 26.779220779220775], [140.0, 147.94871794871796], [141.0, 73.91463414634146], [142.0, 71.04705882352943], [143.0, 25.21333333333333], [144.0, 114.73563218390805], [145.0, 72.5125], [146.0, 82.4470588235294], [147.0, 72.7906976744186], [148.0, 83.31707317073172], [149.0, 80.03571428571429], [150.0, 73.69047619047619], [151.0, 102.56578947368422], [152.0, 109.35555555555555], [153.0, 82.32142857142856], [154.0, 88.41250000000002], [155.0, 50.662790697674424], [156.0, 120.0], [157.0, 82.4111111111111], [158.0, 93.33333333333334], [159.0, 56.8452380952381], [160.0, 146.46511627906978], [161.0, 108.47619047619047], [162.0, 113.32183908045977], [163.0, 69.8701298701299], [164.0, 219.8641975308642], [165.0, 180.03614457831324], [166.0, 112.80645161290322], [167.0, 128.2763157894737], [168.0, 151.15555555555554], [169.0, 139.4457831325301], [170.0, 135.02222222222224], [171.0, 155.73076923076925], [172.0, 156.11363636363632], [173.0, 153.1411764705882], [174.0, 115.71604938271605], [175.0, 220.35365853658536], [176.0, 160.40217391304347], [177.0, 171.64197530864195], [178.0, 184.3333333333334], [179.0, 202.43373493975898], [180.0, 196.9204545454545], [181.0, 148.04878048780486], [182.0, 240.36904761904756], [183.0, 201.48148148148144], [184.0, 195.37078651685397], [185.0, 190.9166666666666], [186.0, 211.1351351351352], [187.0, 245.80246913580248], [188.0, 205.87234042553197], [189.0, 156.71794871794864], [190.0, 296.3855421686747], [191.0, 204.46153846153842], [192.0, 311.5121951219512], [193.0, 247.18823529411767], [194.0, 237.91954022988503], [195.0, 203.75999999999996], [196.0, 316.41463414634154], [197.0, 289.01265822784814], [198.0, 222.4320987654321], [199.0, 347.0], [200.0, 442.9845676525116]], "isOverall": false, "label": "POST /booking/", "isController": false}, {"data": [[178.5280487117309, 348.49439025765474]], "isOverall": false, "label": "POST /booking/-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 200.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 11943.8, "minX": 1.79343756E12, "maxY": 89853.0, "series": [{"data": [[1.79343768E12, 75365.2], [1.79343756E12, 11943.8], [1.79343774E12, 35772.066666666666], [1.79343762E12, 87370.45]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79343768E12, 77482.2], [1.79343756E12, 12279.3], [1.79343774E12, 36776.9], [1.79343762E12, 89853.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79343774E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 14.761549925484342, "minX": 1.79343756E12, "maxY": 689.6350970310178, "series": [{"data": [[1.79343768E12, 444.4127696425759], [1.79343756E12, 14.761549925484342], [1.79343774E12, 689.6350970310178], [1.79343762E12, 171.76062457569626]], "isOverall": false, "label": "POST /booking/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79343774E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 14.74615002483854, "minX": 1.79343756E12, "maxY": 689.6206667772452, "series": [{"data": [[1.79343768E12, 444.39930719571583], [1.79343756E12, 14.74615002483854], [1.79343774E12, 689.6206667772452], [1.79343762E12, 171.7464358452142]], "isOverall": false, "label": "POST /booking/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79343774E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.008146639511201688, "minX": 1.79343756E12, "maxY": 0.04619970193740689, "series": [{"data": [[1.79343768E12, 0.009998425444811861], [1.79343756E12, 0.04619970193740689], [1.79343774E12, 0.017415823519654997], [1.79343762E12, 0.008146639511201688]], "isOverall": false, "label": "POST /booking/", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79343774E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 3.0, "minX": 1.79343756E12, "maxY": 5204.0, "series": [{"data": [[1.79343768E12, 1529.0], [1.79343756E12, 55.0], [1.79343774E12, 5204.0], [1.79343762E12, 1110.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79343768E12, 9.0], [1.79343756E12, 4.0], [1.79343774E12, 11.0], [1.79343762E12, 3.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79343768E12, 666.0], [1.79343756E12, 26.0], [1.79343774E12, 1026.0], [1.79343762E12, 382.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79343768E12, 992.0], [1.79343756E12, 31.0], [1.79343774E12, 4393.099999999999], [1.79343762E12, 698.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79343768E12, 370.0], [1.79343756E12, 12.0], [1.79343774E12, 491.0], [1.79343762E12, 153.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.79343768E12, 861.0], [1.79343756E12, 27.0], [1.79343774E12, 1595.5], [1.79343762E12, 418.4499999999989]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79343774E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 10.0, "minX": 2.0, "maxY": 3788.0, "series": [{"data": [[2.0, 33.0], [10.0, 15.0], [16.0, 721.0], [18.0, 2920.5], [23.0, 254.5], [30.0, 11.0], [35.0, 11.0], [42.0, 11.0], [49.0, 10.0], [50.0, 3788.0], [55.0, 11.0], [62.0, 12.0], [69.0, 11.0], [73.0, 10.0], [81.0, 12.0], [89.0, 13.0], [93.0, 11.0], [97.0, 11.0], [104.0, 1033.5], [109.0, 11.0], [115.0, 11.0], [113.0, 579.0], [119.0, 12.0], [126.0, 11.0], [133.0, 13.0], [137.0, 15.0], [141.0, 13.0], [149.0, 563.0], [150.0, 513.0], [153.0, 13.0], [154.0, 22.0], [157.0, 521.0], [164.0, 25.0], [166.0, 890.5], [167.0, 476.0], [162.0, 882.0], [169.0, 24.0], [174.0, 253.0], [175.0, 587.0], [172.0, 509.0], [171.0, 573.0], [181.0, 381.0], [179.0, 467.0], [183.0, 429.0], [177.0, 387.0], [178.0, 442.0], [188.0, 479.0], [189.0, 413.0], [186.0, 445.0], [191.0, 395.0], [196.0, 27.0], [198.0, 383.0], [195.0, 431.5], [197.0, 307.0], [194.0, 357.0], [200.0, 373.0], [206.0, 48.0], [201.0, 392.0], [203.0, 337.0], [205.0, 435.5], [207.0, 355.0], [208.0, 104.0], [212.0, 355.0], [215.0, 323.0], [211.0, 405.0], [210.0, 368.0], [214.0, 386.0], [209.0, 342.0], [222.0, 323.0], [223.0, 45.0], [221.0, 339.0], [217.0, 323.0], [220.0, 308.0], [219.0, 294.0], [216.0, 323.0], [218.0, 369.5], [226.0, 291.0], [227.0, 308.5], [228.0, 291.0], [225.0, 294.0], [230.0, 323.0], [224.0, 337.0], [235.0, 25.0], [239.0, 399.0], [234.0, 279.0], [236.0, 279.0], [240.0, 25.0], [245.0, 26.0], [247.0, 229.0], [243.0, 264.0], [249.0, 57.0], [255.0, 28.0], [248.0, 247.0], [254.0, 202.0], [252.0, 228.0], [269.0, 186.0], [266.0, 55.0], [262.0, 139.0], [265.0, 138.0], [259.0, 278.0], [256.0, 203.0], [258.0, 260.0], [261.0, 216.0], [264.0, 201.0], [270.0, 215.5], [260.0, 203.0], [275.0, 36.0], [274.0, 136.0], [285.0, 43.0], [284.0, 54.0], [283.0, 92.0], [281.0, 89.0], [273.0, 121.0], [282.0, 176.5], [276.0, 213.0], [288.0, 136.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 288.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 10.0, "minX": 2.0, "maxY": 3788.0, "series": [{"data": [[2.0, 31.5], [10.0, 15.0], [16.0, 721.0], [18.0, 2920.5], [23.0, 254.5], [30.0, 11.0], [35.0, 11.0], [42.0, 11.0], [49.0, 10.0], [50.0, 3788.0], [55.0, 11.0], [62.0, 12.0], [69.0, 11.0], [73.0, 10.0], [81.0, 12.0], [89.0, 13.0], [93.0, 11.0], [97.0, 11.0], [104.0, 1033.5], [109.0, 11.0], [115.0, 11.0], [113.0, 579.0], [119.0, 12.0], [126.0, 11.0], [133.0, 13.0], [137.0, 15.0], [141.0, 13.0], [149.0, 563.0], [150.0, 513.0], [153.0, 13.0], [154.0, 22.0], [157.0, 521.0], [164.0, 25.0], [166.0, 890.5], [167.0, 476.0], [162.0, 882.0], [169.0, 24.0], [174.0, 253.0], [175.0, 587.0], [172.0, 509.0], [171.0, 573.0], [181.0, 381.0], [179.0, 467.0], [183.0, 429.0], [177.0, 387.0], [178.0, 442.0], [188.0, 478.5], [189.0, 413.0], [186.0, 445.0], [191.0, 395.0], [196.0, 27.0], [198.0, 383.0], [195.0, 431.5], [197.0, 307.0], [194.0, 356.5], [200.0, 373.0], [206.0, 48.0], [201.0, 392.0], [203.0, 337.0], [205.0, 435.5], [207.0, 355.0], [208.0, 104.0], [212.0, 355.0], [215.0, 323.0], [211.0, 405.0], [210.0, 368.0], [214.0, 386.0], [209.0, 342.0], [222.0, 323.0], [223.0, 45.0], [221.0, 338.0], [217.0, 323.0], [220.0, 308.0], [219.0, 294.0], [216.0, 323.0], [218.0, 369.0], [226.0, 291.0], [227.0, 308.5], [228.0, 291.0], [225.0, 294.0], [230.0, 323.0], [224.0, 337.0], [235.0, 25.0], [239.0, 399.0], [234.0, 279.0], [236.0, 279.0], [240.0, 25.0], [245.0, 26.0], [247.0, 229.0], [243.0, 264.0], [249.0, 57.0], [255.0, 28.0], [248.0, 247.0], [254.0, 202.0], [252.0, 228.0], [269.0, 186.0], [266.0, 55.0], [262.0, 139.0], [265.0, 138.0], [259.0, 278.0], [256.0, 203.0], [258.0, 260.0], [261.0, 216.0], [264.0, 201.0], [270.0, 215.5], [260.0, 203.0], [275.0, 36.0], [274.0, 136.0], [285.0, 43.0], [284.0, 54.0], [283.0, 92.0], [281.0, 89.0], [273.0, 121.0], [282.0, 176.5], [276.0, 213.0], [288.0, 136.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 288.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 33.68333333333333, "minX": 1.79343756E12, "maxY": 247.05, "series": [{"data": [[1.79343768E12, 211.48333333333332], [1.79343756E12, 33.68333333333333], [1.79343774E12, 99.01666666666667], [1.79343762E12, 247.05]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79343774E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 33.55, "minX": 1.79343756E12, "maxY": 245.5, "series": [{"data": [[1.79343768E12, 211.7], [1.79343756E12, 33.55], [1.79343774E12, 100.48333333333333], [1.79343762E12, 245.5]], "isOverall": false, "label": "201", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79343774E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 33.55, "minX": 1.79343756E12, "maxY": 245.5, "series": [{"data": [[1.79343768E12, 211.7], [1.79343756E12, 33.55], [1.79343774E12, 100.48333333333333], [1.79343762E12, 245.5]], "isOverall": false, "label": "POST /booking/-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79343774E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 33.55, "minX": 1.79343756E12, "maxY": 245.5, "series": [{"data": [[1.79343768E12, 211.7], [1.79343756E12, 33.55], [1.79343774E12, 100.48333333333333], [1.79343762E12, 245.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79343774E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

