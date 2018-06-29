/*
 * __author__ = 'Kanishka Mohan Madhuni <kmmadhuni@gmail.com>'
 * __copyright__ = 'Copyright (C) 2018 Ethereal Machines Pvt. Ltd. All rights reserved'
 */

import z_probe from './assets/images/features-images/z_probe.png';
import encoder_feedback from './assets/images/features-images/encoder_feedback.png';
import ample_work_area from './assets/images/features-images/ample_work_area.png';
import multiple_tool_support from './assets/images/features-images/multiple_tool_support.png';
import high_accuracy_drive_mechanism from './assets/images/features-images/high_accuracy_drive_mechanism.png';
import desktop_size from './assets/images/features-images/desktop_size.png';
import dedicated_pc_based_controller from './assets/images/features-images/dedicated_pc_based_controller.png';
import five_axis_simultaneous from './assets/images/features-images/5_axis_simultaneous.png';
import user_friendly_interface from './assets/images/features-images/user_friendly_interface.png';

const etherealPentagram = {
  features: [
    {
      id: 1,
      title: 'Desktop Size',
      description: 'Designed and engineered to occupy minimal floor space',
      imgUrl: desktop_size
    },
    {
      id: 2,
      title: 'Ample Work Area',
      description: 'The Pentagram offers a work area of 200 x 200 mm',
      imgUrl: ample_work_area
    },
    {
      id: 3,
      title: '5-Axis Simultaneous Kinematics',
      description: '5 axis simulatneous movement to help reduce machining time',
      imgUrl: five_axis_simultaneous
    },
    {
      id: 4,
      title: 'High Accuracy Drive Mechanism',
      description: 'Achieved through utilization of highly accurately calibrated ball screws and linear guide rails',
      imgUrl: high_accuracy_drive_mechanism
    },
    {
      id: 5,
      title: 'Dedicated PC-Based Controller',
      description: 'Real time monitoring and control of the machining job in progress',
      imgUrl: dedicated_pc_based_controller
    },
    {
      id: 6,
      title: 'Encoder Feedback',
      description: 'Ensures zero bypass of machine code',
      imgUrl: encoder_feedback
    },
    {
      id: 7,
      title: 'Multiple Tool Support',
      description: 'Permits employment of various tools to machine a spectrum of materials',
      imgUrl: multiple_tool_support
    },
    {
      id: 8,
      title: 'Z Probe',
      description: 'Facilitates auto tool height compensation',
      imgUrl: z_probe
    },
    {
      id: 9,
      title: 'User Friendly Interface',
      description: 'Ensures easy operability and aids in quick familiarization with the machine',
      imgUrl: user_friendly_interface
    }
  ],
  techSpecs: [
    {
      id: 1,
      title: 'Work Area',
      description: '200 X 200 mm'
    },
    {
      id: 2,
      title: 'Footprint',
      description: '960 x 875 mm'
    },
    {
      id: 3,
      title: 'Accuracy',
      description: '60 microns'
    },
    {
      id: 4,
      title: 'Load Bearing Capacity',
      description: '25 kgs'
    },
    {
      id: 5,
      title: 'Subtractive Manufacturing Materials',
      description: 'Soft Metals (Aluminium, Gold, Silver, Bronze etc), Wax, Foam, Wood, Plastics etc.'
    },
    {
      id: 6,
      title: 'Dedicated PC-Based Controller',
      description: 'Real time monitoring and control of the machining in process'
    },
    {
      id: 7,
      title: 'Spindle',
      description: '2.2kW / 3.0kW, DC motor, ER-20 tool holder'
    },
    {
      id: 8,
      title: 'Working Speed',
      description: '2000 mm/min'
    },
    {
      id: 9,
      title: 'Power Supply',
      description: '8kW, 3phase'
    }
  ]
};

export default etherealPentagram;