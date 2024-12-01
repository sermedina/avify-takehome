export interface ChartOptions {
    chart: {
      id: string;
      type?: 'area' | 'line' | 'bar' | 'donut';
      height?:string;
    };
    theme: {
        mode: 'dark' | 'light' ;
    };
    xaxis?: {
      categories: string[];
    };
    yaxis?: {
        title: {
            text:string;
        } 
      };
    plotOptions? :{
        bar:Bar
    },
    colors?: string[];
    labels?: string[];
    fill?: {
        type: string,
        gradient: Gradient
      },
      dataLabels?: {
        enabled: boolean;
        formatter: (val: number) => string;
      };
      tooltip?: {
        y: {
          formatter: (val: number) => string;
        };
      };
  }

  interface Bar {
    horizontal?:boolean;
    columnWidth: string;
  }

  interface Gradient {
    shade: string,
    type: string,
    shadeIntensity: number,
    gradientToColors: string[], 
    inverseColors: false,
    opacityFrom: number,
    opacityTo: number,
  }
  
  export interface ChartSeries {
    name: string;
    data: number[];
  }