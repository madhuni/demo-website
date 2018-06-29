/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import wireless_printing_monitoring_and_cloud_slicing from './assets/images/features-images/wireless_printing_monitoring_and_cloud_slicing.png';
import software_desktop_web_and_mobile from './assets/images/features-images/software_desktop_web_and_mobile.png';
import original_e3d_hot_end_and_extruder from './assets/images/features-images/original_e3d_hot_end_and_extruder.png';
import optimized_cooling_system from './assets/images/features-images/optimized_cooling_system.png';
import multiple_material_support from './assets/images/features-images/multiple_material_support.png';
import interactive_ui_and_full_colour_touch_screen from './assets/images/features-images/interactive_ui_and_full_colour_touch_screen.png';
import heated_bed from './assets/images/features-images/heated_bed.png';
import dual_extruder from './assets/images/features-images/dual_extruder.png';
import ample_print_volume from './assets/images/features-images/ample_print_volume.png';

const etherealRay = {
  features: [
    {
      id: 1,
      title: 'Dual Extruder',
      description: 'Dual extruder gives you the freedom to combine water soluble suppoort materials and engineering plastics to create complex geometries or print in two different colours',
      imgUrl: dual_extruder
    },
    {
      id: 2,
      title: 'Ample Print Volume',
      description: 'The Ray offers a print volumen of 250 x 200 x 200 mm, which can accomodate your everyday priting needs',
      imgUrl: ample_print_volume
    },
    {
      id: 3,
      title: 'Original E3D Hot End and Extruder',
      description: 'Original E3D Chimera hotends and E3D Titaln extruders ensure superior quality prints',
      imgUrl: original_e3d_hot_end_and_extruder
    },
    {
      id: 4,
      title: 'Intereactive UI and Full Colour Touch Screen Panel',
      description: 'A 5.5" capacitive touch screen and and intutive onboard software makes operating the Ray and easy job',
      imgUrl: interactive_ui_and_full_colour_touch_screen
    },
    {
      id: 5,
      title: 'Optimized Cooling System',
      description: 'An advanced cooling system with a powerful radial fan and specially designed air duct ensures better cooling, high quality bridging and better surface finishes',
      imgUrl: optimized_cooling_system
    },
    {
      id: 6,
      title: 'Heated Bed',
      description: 'With a heated bed that reaches upto 110 DegC, build plate adhesion is no more a worry. The heated bed also lets you print with various engineering platics',
      imgUrl: heated_bed
    },
    {
      id: 7,
      title: 'Software: Desktop, Web and Mobile',
      description: 'With the choice of a desktop application, web based application and a mobile application, your 3D printing workflow becomes seamless and faster',
      imgUrl: software_desktop_web_and_mobile
    },
    {
      id: 8,
      title: 'Wireless Printing, Monitoring and Cloud Slicing',
      description: 'You can wirelessly slice, print and monitor your prints through our web based application or the mobile application',
      imgUrl: wireless_printing_monitoring_and_cloud_slicing
    },
    {
      id: 9,
      title: 'Multiple Material Support',
      description: 'Flexibility to use numerous 3D printing materials including water soluble PVA and engineering plastics like ABS, Nylon etc',
      imgUrl: multiple_material_support
    },
  ],
  techSpecs: [
    {
      id: 1,
      title: 'Print Volume',
      description: '250 X 200 X 200 mm'
    },
    {
      id: 2,
      title: 'Printer Dimension',
      description: '480 X 435 X 425 mm'
    },
    {
      id: 3,
      title: 'Weight',
      description: '20 kgs'
    },
    {
      id: 4,
      title: 'Accuracy',
      description: 'X-Axis, Y-Axis: 12.5 microns Z-Axis: 2 microns'
    },
    {
      id: 5,
      title: 'Nozzle Size',
      description: '0.2, 0.2, 0.8, 1.0 mm'
    },
    {
      id: 6,
      title: 'Print Speed',
      description: 'Upto 100 mm/s'
    },
    {
      id: 7,
      title: 'Travel Speed',
      description: 'Upto 150 mm/s'
    },
    {
      id: 8,
      title: 'Hot End Temperature',
      description: 'Upto 285 Deg Celcius'
    },
    {
      id: 9,
      title: 'Nozzle Heat Up Time',
      description: '< 2 mins'
    },
    {
      id: 10,
      title: 'Bed Temperature',
      description: 'Upto 110 Deg Celcius'
    },
    {
      id: 11,
      title: 'Filament Diameter',
      description: '1.75 mm'
    },
    {
      id: 12,
      title: 'Connectivity',
      description: 'WiFi, LAN, USB'
    },
    {
      id: 13,
      title: 'Supported File Formats',
      description: '.stl, .gcode, .g'
    },
    {
      id: 14,
      title: 'Input Power',
      description: '110-240 V, 4A'
    },
  ]
};

export default etherealRay;