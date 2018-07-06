/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import multiple_tool_support from './assets/images/features-images/multiple_tool_support.png';
import multiple_material_support from './assets/images/features-images/multiple_material_support.png';
import high_accuracy_drive_mechanism from './assets/images/features-images/high_accuracy_drive_mechanism.png';
import desktop_size from './assets/images/features-images/desktop_size.png';
import dedicated_pc_based_controller from './assets/images/features-images/dedicated_pc_based_controller.png';
import advanced_nozzle_design from './assets/images/features-images/advanced_nozzle_design.png';
import additive_subtractive from './assets/images/features-images/additive_subtractive.png';
import five_axis_simultaneous from './assets/images/features-images/5_axis_simultaneous.png';

const etherealHalo = {
  features: [
    {
      id: 1,
      title: 'Additive + Subtractive Manufacturing',
      description: 'Freedom to switch between the two processes at any point',
      imgUrl: additive_subtractive
    },
    {
      id: 2,
      title: 'Desktop Size',
      description: 'Designed and engineered to occupy minimal floor space',
      imgUrl: desktop_size
    },
    {
      id: 3,
      title: '5-Axis Simultaneous Kinematics',
      description: '5 axis simulatneous movement to help reduce machining time and achieve better surface finish',
      imgUrl: five_axis_simultaneous
    },
    {
      id: 4,
      title: 'High Accuracy Drive Mechanism',
      description: 'Achieved through utilization of accurately calibrated ball screws and linear guide rails',
      imgUrl: high_accuracy_drive_mechanism
    },
    {
      id: 5,
      title: 'Dedicated PC-Based Controller',
      description: 'Real time monitoring and control of the machining/printing job in progress',
      imgUrl: dedicated_pc_based_controller
    },
    {
      id: 6,
      title: 'Advanced Nozzle Design',
      description: 'Ensures zero clogging and smooth filament deposition',
      imgUrl: advanced_nozzle_design
    },
    {
      id: 7,
      title: 'Multiple Material Support',
      description: 'Flexibility to use numerous materials to machine or 3D print',
      imgUrl: multiple_material_support
    },
    {
      id: 8,
      title: 'Multiple Tool Support',
      description: 'Permits employment of various tools to machine a spectrum of materials',
      imgUrl: multiple_tool_support
    },
  ],
  techSpecs: [
    {
      id: 1,
      title: 'Work Area',
      description: '150 Ø X 150 mm'
    },
    {
      id: 2,
      title: 'Dimensions',
      description: '900 x 900 x 1250 mm (dkh ke bataya jayega)'
    },
    {
      id: 3,
      title: 'Accuracy',
      description: '60 microns'
    },
    {
      id: 4,
      title: 'Load Bearing Capacity',
      description: '4 kgs'
    },
    {
      id: 5,
      title: 'Subtractive Manufacturing Materials',
      description: 'Wax, Foam, Plastics, Wood etc.'
    },
    {
      id: 6,
      title: 'Dedicated PC-Based Controller',
      description: 'Real time monitoring and control of the machining in process'
    },
    {
      id: 7,
      title: 'Additive Manufacturing Materials',
      description: 'ABS, PLA, PVA, PC, NYLON, PET-G etc.'
    },
    {
      id: 8,
      title: 'Extrusion Mechanism',
      description: 'Geared Direct Drive Extruder'
    },
    {
      id: 9,
      title: 'Spindle',
      description: '800W, AC motor, ER-11 tool holder'
    },
    {
      id: 10,
      title: 'Filament Diameter',
      description: '1.75 mm'
    },
    {
      id: 11,
      title: 'Extruder Temperature',
      description: 'Upto 350 Deg Celsius'
    },
    {
      id: 12,
      title: 'Working Speed',
      description: '1800 mm/min'
    },
    {
      id: 13,
      title: 'Power Requirement',
      description: '110-240 VAC, 2.5 kW'
    },
  ]
};

export default etherealHalo;