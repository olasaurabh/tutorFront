import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Tutor } from '../../models/tutor';
import { TutorService } from '../../services/tutor.service';

@Component({
  selector: 'app-fill-form',
  templateUrl: './fill-form.component.html',
  styleUrls: ['./fill-form.component.css']
})
export class FillFormComponent implements OnInit {

  tutorDetailsForm: FormGroup;

  genders: string[] = [
    'Male',
    'Female'
  ];

  softwareSubjects: string[] = [];
  mathsSubjects: string[] = [];
  departmentSubjects: string[] = [];
  OtherSubjects: string[] = [];

  softwareSubjectsString: string = '';
  mathsSubjectsString: string = '';
  departmentSubjectsString: string = '';
  OtherSubjectsString: string = '';

  tutor: Tutor = {};

  departments: string[] = [
    'Chemical Engineering',
    'Civil Engineering',
    'Electrical & Electronics Engineering',
    'Mechanical Engineering'
  ];

  civil: boolean = false;
  chemical: boolean = false;
  electrical: boolean = false;
  mechanical: boolean = false;
  differentWhatsappNumber: boolean = false;

  departmentControl = new FormControl();

  constructor(public afAuth: AngularFireAuth, private fb: FormBuilder, private service: TutorService) {
    this.tutorDetailsForm = this.fb.group({
      firstName: [null, Validators.required],
      lastName: [null, Validators.required],
      gender: [null, Validators.required],
      emailId: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      whatsappNumber: [null, Validators.required],
      collegeName: [null, Validators.required],
      degree: [null, Validators.required],
      departmentOfStudy: [null, Validators.required],
      currentSemester: [null, Validators.required],
      yearOfPassing: [null, Validators.required],
      cgpa: [null, Validators.required],
      AlgebraJEELevel: [null],
      TrigonometryJEELevel: [null],
      MathematicsJEELevel: [null],
      CalculusEngineeringLevel: [null],
      DifferentialEquations: [null],
      LinearAlgebra: [null],
      NumericalAnalysisMatlab: [null],
      Statistics: [null],
      Probability: [null],
      EngineeringAnalysisMatlab: [null],
      DifferentialEquationsLinearAlgebra: [null],
      VBA: [null],
      SequenceSeries: [null],
      ComplexVariables: [null],
      DiscreteMathematics: [null],
      CalculusLinearAlgebra: [null],
      Matlab: null,
      Solidworks: null,
      Ansys: null,
      Autocad: null,
      Catia: null,
      Mathcad: null,
      MSExcel: null,
      CC: null,
      Java: null,
      VBASoftware: null,
      VisualStudio: null,
      Solidedge: null,
      MSWord: null,
      MSPowerpoint: null,
      EES: null,
      Finance: null,
      Accounting: null,
      Economics: null,
      OperationManagement: null,
      English: null,
      Philosophy: null,
      Humanities: null,
      Ethics: null,
      Psychology: null,
      Physics: null,
      GeneralChemistry: null,
      Biology: null,
      ModernPhysics: null,
      Electromagnetism: null,
      OrganicChemistry: null,
      PhysicalChemistry: null,
      chemicalThermodynamics: null,
      chemicalHeatTransfer: null,
      chemicalFluidMechanics: null,
      chemicalMaterialScienceEngineeringMaterials: null,
      chemicalDynamics: null,
      chemicalStatics: null,
      chemicalStaticsDynamics: null,
      chemicalEngineeringFundamental: null,
      civilEngineeringDrawing: null,
      civilDynamics: null,
      civilStatics: null,
      civilStaticsDynamics: null,
      EnvironmentalEngineering: null,
      civilFluidMechanics: null,
      GeotechnicalEngineering: null,
      HydraulicEngineering: null,
      IntroductiontoCivilEngineering: null,
      civilMOM: null,
      SoilMechanics: null,
      StructuralAnalysis: null,
      Surveying: null,
      TransportationEngineering: null,
      WaterResourcesEngineering: null,
      civilEngineeringFundamental: null,
      civilThermodynamics: null,
      IntroductiontoElectricalEngineering: null,
      electricalRobotics: null,
      electricalMeasurementsandInstrumentation: null,
      SignalsSystemsMatlab: null,
      ElectricalCircuitsNetworks: null,
      LogicDesignDigitalSystemDesign: null,
      DigitalSignalProcessing: null,
      electricalControlSystems: null,
      MachineLearning: null,
      electricalElectroMechanicalSystem: null,
      PowerSystems: null,
      electricalThermodynamics: null,
      electricalDynamics: null,
      electricalStatics: null,
      electricalStaticsDynamics: null,
      electricalMechatronics: null,
      electricalEngineeringFundamental: null,
      mehanicalStatics: null,
      mehanicalDynamics: null,
      mehanicalStaticsDynamics: null,
      mehanicalFluidMechanics: null,
      mehanicalMaterialScienceEngineeringMaterials: null,
      KinematicsofMachineryDynamicsofMachine: null,
      mehanicalThermodynamics: null,
      ManufacturingScienceProcess: null,
      mehanicalEngineeringDrawing: null,
      mehanicalMOM: null,
      mehanicalMeasurementsandInstrumentation: null,
      MachineDesign: null,
      HeatTransfer: null,
      DesignofMachineElements: null,
      mehanicalControlSystems: null,
      ThermoFluids: null,
      Vibrations: null,
      SystemDynamics: null,
      ThermalDesign: null,
      VehicleDynamics: null,
      TurboMachinery: null,
      AdvanceMachineDesign: null,
      ComputationalFluidDynamics: null,
      EngineeringFundamental: null,
      AppliedFluidMechanics: null,
      CompressibleFluidFlowGasDynamics: null,
      IntroductiontoMechanicalEngineering: null,
      AppliedHeatTransfer: null,
      CompositeMaterial: null,
      IndustrialEngineering: null,
      AppliedThermodynamics: null,
      mehanicalRobotics: null,
      mehanicalElectroMechanicalSystem: null,
      FiniteElementAnalysis: null,
      mehanicalMechatronics: null,
      InternalCombustionEngine: null,
      whyEduFeat: [null, Validators.required],
      experience: [null, Validators.required],
      query: [null],
      cvCheckbox: null
    });

    this.departmentControl.valueChanges.subscribe(data => {
      if (data == 'Civil Engineering') {
        this.civil = true;
        this.chemical = false;
        this.electrical = false;
        this.mechanical = false;
      };
      if (data == 'Chemical Engineering') {
        this.civil = false;
        this.chemical = true;
        this.electrical = false;
        this.mechanical = false;
      };
      if (data == 'Electrical & Electronics Engineering') {
        this.civil = false;
        this.chemical = false;
        this.electrical = true;
        this.mechanical = false;
      };
      if (data == 'Mechanical Engineering') {
        this.civil = false;
        this.chemical = false;
        this.electrical = false;
        this.mechanical = true;
      };
    })
    this.tutorDetailsForm.controls['AlgebraJEELevel'].valueChanges.subscribe(data => {
      if (data == true) {
        this.mathsSubjects.push('Algebra (JEE Level)')
      } else {
        var i = this.mathsSubjects.indexOf('Algebra (JEE Level)')
        this.mathsSubjects.splice(i, 1);
      }
      console.log(this.mathsSubjects);
    });
    this.tutorDetailsForm.controls['TrigonometryJEELevel'].valueChanges.subscribe(data => {
      if (data == true) { this.mathsSubjects.push('Trigonometry (JEE Level)') } else {
        var i = this.mathsSubjects.indexOf('Trigonometry (JEE Level)')
        this.mathsSubjects.splice(i, 1);
      } console.log(this.mathsSubjects);
    });
    this.tutorDetailsForm.controls['MathematicsJEELevel'].valueChanges.subscribe(data => {
      if (data == true) { this.mathsSubjects.push('Mathematics (JEE Level)') } else {
        var i = this.mathsSubjects.indexOf('Mathematics (JEE Level)')
        this.mathsSubjects.splice(i, 1);
      } console.log(this.mathsSubjects);
    });
    this.tutorDetailsForm.controls['CalculusEngineeringLevel'].valueChanges.subscribe(data => {
      if (data == true) { this.mathsSubjects.push('Calculus (Engineering Level)') } else {
        var i = this.mathsSubjects.indexOf('Calculus (Engineering Level)')
        this.mathsSubjects.splice(i, 1);
      } console.log(this.mathsSubjects);
    });
    this.tutorDetailsForm.controls['DifferentialEquations'].valueChanges.subscribe(data => {
      if (data == true) { this.mathsSubjects.push('Differential Equations') } else {
        var i = this.mathsSubjects.indexOf('Differential Equations')
        this.mathsSubjects.splice(i, 1);
      } console.log(this.mathsSubjects);
    });
    this.tutorDetailsForm.controls['LinearAlgebra'].valueChanges.subscribe(data => {
      if (data == true) { this.mathsSubjects.push('Algebra (JEE Level)') } else {
        var i = this.mathsSubjects.indexOf('Algebra (JEE Level)')
        this.mathsSubjects.splice(i, 1);
      } console.log(this.mathsSubjects);
    });
    this.tutorDetailsForm.controls['NumericalAnalysisMatlab'].valueChanges.subscribe(data => {
      if (data == true) { this.mathsSubjects.push('Numerical Analysis + Matlab') } else {
        var i = this.mathsSubjects.indexOf('Numerical Analysis + Matlab')
        this.mathsSubjects.splice(i, 1);
      } console.log(this.mathsSubjects);
    });
    this.tutorDetailsForm.controls['Statistics'].valueChanges.subscribe(data => {
      if (data == true) { this.mathsSubjects.push('Statistics') } else {
        var i = this.mathsSubjects.indexOf('Statistics')
        this.mathsSubjects.splice(i, 1);
      } console.log(this.mathsSubjects);
    });
    this.tutorDetailsForm.controls['Probability'].valueChanges.subscribe(data => {
      if (data == true) { this.mathsSubjects.push('Probability') } else {
        var i = this.mathsSubjects.indexOf('Probability')
        this.mathsSubjects.splice(i, 1);
      } console.log(this.mathsSubjects);
    });
    this.tutorDetailsForm.controls['EngineeringAnalysisMatlab'].valueChanges.subscribe(data => {
      if (data == true) { this.mathsSubjects.push('Engineering Analysis + Matlab') } else {
        var i = this.mathsSubjects.indexOf('Engineering Analysis + Matlab')
        this.mathsSubjects.splice(i, 1);
      } console.log(this.mathsSubjects);
    });
    this.tutorDetailsForm.controls['DifferentialEquationsLinearAlgebra'].valueChanges.subscribe(data => {
      if (data == true) { this.mathsSubjects.push('Differential Equations & Linear Algebra') } else {
        var i = this.mathsSubjects.indexOf('Differential Equations & Linear Algebra')
        this.mathsSubjects.splice(i, 1);
      } console.log(this.mathsSubjects);
    });
    this.tutorDetailsForm.controls['VBA'].valueChanges.subscribe(data => {
      if (data == true) { this.mathsSubjects.push('VBA') } else {
        var i = this.mathsSubjects.indexOf('VBA')
        this.mathsSubjects.splice(i, 1);
      } console.log(this.mathsSubjects);
    });
    this.tutorDetailsForm.controls['SequenceSeries'].valueChanges.subscribe(data => {
      if (data == true) { this.mathsSubjects.push('Sequence & Series') } else {
        var i = this.mathsSubjects.indexOf('Sequence & Series')
        this.mathsSubjects.splice(i, 1);
      } console.log(this.mathsSubjects);
    });
    this.tutorDetailsForm.controls['ComplexVariables'].valueChanges.subscribe(data => {
      if (data == true) { this.mathsSubjects.push('Complex Variables') } else {
        var i = this.mathsSubjects.indexOf('Complex Variables')
        this.mathsSubjects.splice(i, 1);
      } console.log(this.mathsSubjects);
    });
    this.tutorDetailsForm.controls['DiscreteMathematics'].valueChanges.subscribe(data => {
      if (data == true) { this.mathsSubjects.push('Discrete Mathematics') } else {
        var i = this.mathsSubjects.indexOf('Discrete Mathematics')
        this.mathsSubjects.splice(i, 1);
      } console.log(this.mathsSubjects);
    });
    this.tutorDetailsForm.controls['CalculusLinearAlgebra'].valueChanges.subscribe(data => {
      if (data == true) { this.mathsSubjects.push('Calculus & Linear Algebra') } else {
        var i = this.mathsSubjects.indexOf('Calculus & Linear Algebra')
        this.mathsSubjects.splice(i, 1);
      } console.log(this.mathsSubjects);
    });
    this.tutorDetailsForm.controls['Matlab'].valueChanges.subscribe(data => {
      if (data == true) { this.softwareSubjects.push('Matlab') } else {
        var i = this.softwareSubjects.indexOf('Matlab')
        this.softwareSubjects.splice(i, 1);
      } console.log(this.softwareSubjects);
    });
    this.tutorDetailsForm.controls['Solidworks'].valueChanges.subscribe(data => {
      if (data == true) { this.softwareSubjects.push('Solidworks') } else {
        var i = this.softwareSubjects.indexOf('Solidworks')
        this.softwareSubjects.splice(i, 1);
      } console.log(this.softwareSubjects);
    });
    this.tutorDetailsForm.controls['Ansys'].valueChanges.subscribe(data => {
      if (data == true) { this.softwareSubjects.push('Ansys') } else {
        var i = this.softwareSubjects.indexOf('Ansys')
        this.softwareSubjects.splice(i, 1);
      } console.log(this.softwareSubjects);
    });
    this.tutorDetailsForm.controls['Autocad'].valueChanges.subscribe(data => {
      if (data == true) { this.softwareSubjects.push('Autocad') } else {
        var i = this.softwareSubjects.indexOf('Autocad')
        this.softwareSubjects.splice(i, 1);
      } console.log(this.softwareSubjects);
    });
    this.tutorDetailsForm.controls['Catia'].valueChanges.subscribe(data => {
      if (data == true) { this.softwareSubjects.push('Catia') } else {
        var i = this.softwareSubjects.indexOf('Catia')
        this.softwareSubjects.splice(i, 1);
      } console.log(this.softwareSubjects);
    });
    this.tutorDetailsForm.controls['Mathcad'].valueChanges.subscribe(data => {
      if (data == true) { this.softwareSubjects.push('Mathcad') } else {
        var i = this.softwareSubjects.indexOf('Mathcad')
        this.softwareSubjects.splice(i, 1);
      } console.log(this.softwareSubjects);
    });
    this.tutorDetailsForm.controls['MSExcel'].valueChanges.subscribe(data => {
      if (data == true) { this.softwareSubjects.push('MS Excel') } else {
        var i = this.softwareSubjects.indexOf('MS Excel')
        this.softwareSubjects.splice(i, 1);
      } console.log(this.softwareSubjects);
    });
    this.tutorDetailsForm.controls['CC'].valueChanges.subscribe(data => {
      if (data == true) { this.softwareSubjects.push('C & C++') } else {
        var i = this.softwareSubjects.indexOf('C & C++')
        this.softwareSubjects.splice(i, 1);
      } console.log(this.softwareSubjects);
    });
    this.tutorDetailsForm.controls['Java'].valueChanges.subscribe(data => {
      if (data == true) { this.softwareSubjects.push('Java') } else {
        var i = this.softwareSubjects.indexOf('Java')
        this.softwareSubjects.splice(i, 1);
      } console.log(this.softwareSubjects);
    });
    this.tutorDetailsForm.controls['VBASoftware'].valueChanges.subscribe(data => {
      if (data == true) { this.softwareSubjects.push('VBA') } else {
        var i = this.softwareSubjects.indexOf('VBA')
        this.softwareSubjects.splice(i, 1);
      } console.log(this.softwareSubjects);
    });
    this.tutorDetailsForm.controls['VisualStudio'].valueChanges.subscribe(data => {
      if (data == true) { this.softwareSubjects.push('Visual Studio') } else {
        var i = this.softwareSubjects.indexOf('Visual Studio')
        this.softwareSubjects.splice(i, 1);
      } console.log(this.softwareSubjects);
    });
    this.tutorDetailsForm.controls['Solidedge'].valueChanges.subscribe(data => {
      if (data == true) { this.softwareSubjects.push('Solidedge') } else {
        var i = this.softwareSubjects.indexOf('Solidedge')
        this.softwareSubjects.splice(i, 1);
      } console.log(this.softwareSubjects);
    });
    this.tutorDetailsForm.controls['MSWord'].valueChanges.subscribe(data => {
      if (data == true) { this.softwareSubjects.push('MS Word') } else {
        var i = this.softwareSubjects.indexOf('MS Word')
        this.softwareSubjects.splice(i, 1);
      } console.log(this.softwareSubjects);
    });
    this.tutorDetailsForm.controls['MSPowerpoint'].valueChanges.subscribe(data => {
      if (data == true) { this.softwareSubjects.push('MS Powerpoint') } else {
        var i = this.softwareSubjects.indexOf('MS Powerpoint')
        this.softwareSubjects.splice(i, 1);
      } console.log(this.softwareSubjects);
    });
    this.tutorDetailsForm.controls['EES'].valueChanges.subscribe(data => {
      if (data == true) { this.softwareSubjects.push('EES (Engineering Equation Solver)') } else {
        var i = this.softwareSubjects.indexOf('EES (Engineering Equation Solver)')
        this.softwareSubjects.splice(i, 1);
      } console.log(this.softwareSubjects);
    });
    this.tutorDetailsForm.controls['Finance'].valueChanges.subscribe(data => {
      if (data == true) { this.OtherSubjects.push('Finance') } else {
        var i = this.OtherSubjects.indexOf('Finance')
        this.OtherSubjects.splice(i, 1);
      } console.log(this.OtherSubjects);
    });
    this.tutorDetailsForm.controls['Accounting'].valueChanges.subscribe(data => {
      if (data == true) { this.OtherSubjects.push('Accounting') } else {
        var i = this.OtherSubjects.indexOf('Accounting')
        this.OtherSubjects.splice(i, 1);
      } console.log(this.OtherSubjects);
    });
    this.tutorDetailsForm.controls['Economics'].valueChanges.subscribe(data => {
      if (data == true) { this.OtherSubjects.push('Economics') } else {
        var i = this.OtherSubjects.indexOf('Economics')
        this.OtherSubjects.splice(i, 1);
      } console.log(this.OtherSubjects);
    });
    this.tutorDetailsForm.controls['OperationManagement'].valueChanges.subscribe(data => {
      if (data == true) { this.OtherSubjects.push('Operation Management') } else {
        var i = this.OtherSubjects.indexOf('Operation Management')
        this.OtherSubjects.splice(i, 1);
      } console.log(this.OtherSubjects);
    });
    this.tutorDetailsForm.controls['English'].valueChanges.subscribe(data => {
      if (data == true) { this.OtherSubjects.push('English (Essay/Summary Writing)') } else {
        var i = this.OtherSubjects.indexOf('English (Essay/Summary Writing)')
        this.OtherSubjects.splice(i, 1);
      } console.log(this.OtherSubjects);
    });
    this.tutorDetailsForm.controls['Philosophy'].valueChanges.subscribe(data => {
      if (data == true) { this.OtherSubjects.push('Philosophy') } else {
        var i = this.OtherSubjects.indexOf('Philosophy')
        this.OtherSubjects.splice(i, 1);
      } console.log(this.OtherSubjects);
    });
    this.tutorDetailsForm.controls['Humanities'].valueChanges.subscribe(data => {
      if (data == true) { this.OtherSubjects.push('Humanities') } else {
        var i = this.OtherSubjects.indexOf('Humanities')
        this.OtherSubjects.splice(i, 1);
      } console.log(this.OtherSubjects);
    });
    this.tutorDetailsForm.controls['Ethics'].valueChanges.subscribe(data => {
      if (data == true) { this.OtherSubjects.push('Ethics') } else {
        var i = this.OtherSubjects.indexOf('Ethics')
        this.OtherSubjects.splice(i, 1);
      } console.log(this.OtherSubjects);
    });
    this.tutorDetailsForm.controls['Psychology'].valueChanges.subscribe(data => {
      if (data == true) { this.OtherSubjects.push('Psychology') } else {
        var i = this.OtherSubjects.indexOf('Psychology')
        this.OtherSubjects.splice(i, 1);
      } console.log(this.OtherSubjects);
    });
    this.tutorDetailsForm.controls['Physics'].valueChanges.subscribe(data => {
      if (data == true) { this.OtherSubjects.push('Physics') } else {
        var i = this.OtherSubjects.indexOf('Physics')
        this.OtherSubjects.splice(i, 1);
      } console.log(this.OtherSubjects);
    });
    this.tutorDetailsForm.controls['GeneralChemistry'].valueChanges.subscribe(data => {
      if (data == true) { this.OtherSubjects.push('General Chemistry') } else {
        var i = this.OtherSubjects.indexOf('General Chemistry')
        this.OtherSubjects.splice(i, 1);
      } console.log(this.OtherSubjects);
    });
    this.tutorDetailsForm.controls['Biology'].valueChanges.subscribe(data => {
      if (data == true) { this.OtherSubjects.push('Biology') } else {
        var i = this.OtherSubjects.indexOf('Biology')
        this.OtherSubjects.splice(i, 1);
      } console.log(this.OtherSubjects);
    });
    this.tutorDetailsForm.controls['ModernPhysics'].valueChanges.subscribe(data => {
      if (data == true) { this.OtherSubjects.push('Modern Physics') } else {
        var i = this.OtherSubjects.indexOf('Modern Physics')
        this.OtherSubjects.splice(i, 1);
      } console.log(this.OtherSubjects);
    });
    this.tutorDetailsForm.controls['Electromagnetism'].valueChanges.subscribe(data => {
      if (data == true) { this.OtherSubjects.push('Electromagnetism') } else {
        var i = this.OtherSubjects.indexOf('Electromagnetism')
        this.OtherSubjects.splice(i, 1);
      } console.log(this.OtherSubjects);
    });
    this.tutorDetailsForm.controls['OrganicChemistry'].valueChanges.subscribe(data => {
      if (data == true) { this.OtherSubjects.push('Organic Chemistry') } else {
        var i = this.OtherSubjects.indexOf('Organic Chemistry')
        this.OtherSubjects.splice(i, 1);
      } console.log(this.OtherSubjects);
    });
    this.tutorDetailsForm.controls['PhysicalChemistry'].valueChanges.subscribe(data => {
      if (data == true) { this.OtherSubjects.push('Physical Chemistry') } else {
        var i = this.OtherSubjects.indexOf('Physical Chemistry')
        this.OtherSubjects.splice(i, 1);
      } console.log(this.OtherSubjects);
    });
    this.tutorDetailsForm.controls['chemicalThermodynamics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Thermodynamics') } else {
        var i = this.departmentSubjects.indexOf('Thermodynamics')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['chemicalHeatTransfer'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Heat Transfer') } else {
        var i = this.departmentSubjects.indexOf('Heat Transfer')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['chemicalFluidMechanics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Fluid Mechanics') } else {
        var i = this.departmentSubjects.indexOf('Fluid Mechanics')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['chemicalMaterialScienceEngineeringMaterials'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Material Science / Engineering Materials') } else {
        var i = this.departmentSubjects.indexOf('Material Science / Engineering Materials')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['chemicalDynamics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Engineering Mechanics (Dynamics)') } else {
        var i = this.departmentSubjects.indexOf('Engineering Mechanics (Dynamics)')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['chemicalStatics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Engineering Mechanics (Statics)') } else {
        var i = this.departmentSubjects.indexOf('Engineering Mechanics (Statics)')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['chemicalStaticsDynamics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Engineering Mechanics (Statics+Dynamics)') } else {
        var i = this.departmentSubjects.indexOf('Engineering Mechanics (Statics+Dynamics)')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['chemicalEngineeringFundamental'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Engineering Fundamental') } else {
        var i = this.departmentSubjects.indexOf('Engineering Fundamental')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['civilEngineeringDrawing'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Engineering Drawing') } else {
        var i = this.departmentSubjects.indexOf('Engineering Drawing')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['civilDynamics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Engineering Mechanics (Dynamics)') } else {
        var i = this.departmentSubjects.indexOf('Engineering Mechanics (Dynamics)')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['civilStatics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Engineering Mechanics (Statics)') } else {
        var i = this.departmentSubjects.indexOf('Engineering Mechanics (Statics)')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['civilStaticsDynamics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Engineering Mechanics (Statics+Dynamics)') } else {
        var i = this.departmentSubjects.indexOf('Engineering Mechanics (Statics+Dynamics)')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['EnvironmentalEngineering'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Environmental Engineering ') } else {
        var i = this.departmentSubjects.indexOf('Environmental Engineering ')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['civilFluidMechanics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Fluid Mechanics') } else {
        var i = this.departmentSubjects.indexOf('Fluid Mechanics')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['GeotechnicalEngineering'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Geotechnical Engineering ') } else {
        var i = this.departmentSubjects.indexOf('Geotechnical Engineering ')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['HydraulicEngineering'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Hydraulic Engineering') } else {
        var i = this.departmentSubjects.indexOf('Hydraulic Engineering')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['IntroductiontoCivilEngineering'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Introduction to Civil Engineering') } else {
        var i = this.departmentSubjects.indexOf('Introduction to Civil Engineering')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['civilMOM'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Mechanics of Material (MOM / SOM / MOS)') } else {
        var i = this.departmentSubjects.indexOf('Mechanics of Material (MOM / SOM / MOS)')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['SoilMechanics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Soil Mechanics') } else {
        var i = this.departmentSubjects.indexOf('Soil Mechanics')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['StructuralAnalysis'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Structural Analysis ') } else {
        var i = this.departmentSubjects.indexOf('Structural Analysis ')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['Surveying'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Surveying ') } else {
        var i = this.departmentSubjects.indexOf('Surveying ')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['TransportationEngineering'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Transportation Engineering') } else {
        var i = this.departmentSubjects.indexOf('Transportation Engineering')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['WaterResourcesEngineering'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Water Resources Engineering ') } else {
        var i = this.departmentSubjects.indexOf('Water Resources Engineering ')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['civilEngineeringFundamental'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Engineering Fundamental') } else {
        var i = this.departmentSubjects.indexOf('Engineering Fundamental')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['civilThermodynamics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Thermodynamics') } else {
        var i = this.departmentSubjects.indexOf('Thermodynamics')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['IntroductiontoElectricalEngineering'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Introduction to Electrical Engineering') } else {
        var i = this.departmentSubjects.indexOf('Introduction to Electrical Engineering')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['electricalRobotics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Robotics') } else {
        var i = this.departmentSubjects.indexOf('Robotics')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['electricalMeasurementsandInstrumentation'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Measurements and Instrumentation ') } else {
        var i = this.departmentSubjects.indexOf('Measurements and Instrumentation ')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['SignalsSystemsMatlab'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Signals & Systems + Matlab') } else {
        var i = this.departmentSubjects.indexOf('Signals & Systems + Matlab')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['ElectricalCircuitsNetworks'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Electrical Circuits & Networks') } else {
        var i = this.departmentSubjects.indexOf('Electrical Circuits & Networks')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['LogicDesignDigitalSystemDesign'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Logic Design / Digital System Design') } else {
        var i = this.departmentSubjects.indexOf('Logic Design / Digital System Design')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['DigitalSignalProcessing'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Digital Signal Processing') } else {
        var i = this.departmentSubjects.indexOf('Digital Signal Processing')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['electricalControlSystems'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Control Systems') } else {
        var i = this.departmentSubjects.indexOf('Control Systems')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['MachineLearning'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Machine Learning') } else {
        var i = this.departmentSubjects.indexOf('Machine Learning')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['electricalElectroMechanicalSystem'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Electro Mechanical System') } else {
        var i = this.departmentSubjects.indexOf('Electro Mechanical System')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['PowerSystems'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Power Systems') } else {
        var i = this.departmentSubjects.indexOf('Power Systems')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['electricalThermodynamics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Thermodynamics') } else {
        var i = this.departmentSubjects.indexOf('Thermodynamics')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['electricalDynamics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Engineering Mechanics (Dynamics)') } else {
        var i = this.departmentSubjects.indexOf('Engineering Mechanics (Dynamics)')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['electricalStatics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Engineering Mechanics (Statics)') } else {
        var i = this.departmentSubjects.indexOf('Engineering Mechanics (Statics)')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['electricalStaticsDynamics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Engineering Mechanics (Statics+Dynamics)') } else {
        var i = this.departmentSubjects.indexOf('Engineering Mechanics (Statics+Dynamics)')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['electricalMechatronics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Mechatronics') } else {
        var i = this.departmentSubjects.indexOf('Mechatronics')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['electricalEngineeringFundamental'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Engineering Fundamental') } else {
        var i = this.departmentSubjects.indexOf('Engineering Fundamental')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['mehanicalStatics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Engineering Mechanics (Statics)') } else {
        var i = this.departmentSubjects.indexOf('Engineering Mechanics (Statics)')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['mehanicalDynamics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Engineering Mechanics (Dynamics)') } else {
        var i = this.departmentSubjects.indexOf('Engineering Mechanics (Dynamics)')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['mehanicalStaticsDynamics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Engineering Mechanics (Statics+Dynamics)') } else {
        var i = this.departmentSubjects.indexOf('Engineering Mechanics (Statics+Dynamics)')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['mehanicalFluidMechanics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Fluid Mechanics') } else {
        var i = this.departmentSubjects.indexOf('Fluid Mechanics')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['mehanicalMaterialScienceEngineeringMaterials'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Material Science / Engineering Materials') } else {
        var i = this.departmentSubjects.indexOf('Material Science / Engineering Materials')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['KinematicsofMachineryDynamicsofMachine'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Kinematics of Machinery / Dynamics of Machine') } else {
        var i = this.departmentSubjects.indexOf('Kinematics of Machinery / Dynamics of Machine')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['mehanicalThermodynamics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Thermodynamics') } else {
        var i = this.departmentSubjects.indexOf('Thermodynamics')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['ManufacturingScienceProcess'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Manufacturing Science / Process') } else {
        var i = this.departmentSubjects.indexOf('Manufacturing Science / Process')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['mehanicalEngineeringDrawing'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Engineering Drawing') } else {
        var i = this.departmentSubjects.indexOf('Engineering Drawing')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['mehanicalMOM'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Mechanics of Material(MOM / SOM / MOS)') } else {
        var i = this.departmentSubjects.indexOf('Mechanics of Material(MOM / SOM / MOS)')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['mehanicalMeasurementsandInstrumentation'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Measurements and Instrumentation ') } else {
        var i = this.departmentSubjects.indexOf('Measurements and Instrumentation ')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['MachineDesign'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Machine Design') } else {
        var i = this.departmentSubjects.indexOf('Machine Design')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['HeatTransfer'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Heat Transfer') } else {
        var i = this.departmentSubjects.indexOf('Heat Transfer')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['DesignofMachineElements'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Design of Machine Elements (DOME)') } else {
        var i = this.departmentSubjects.indexOf('Design of Machine Elements (DOME)')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['mehanicalControlSystems'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Control Systems') } else {
        var i = this.departmentSubjects.indexOf('Control Systems')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['ThermoFluids'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Thermo-Fluids') } else {
        var i = this.departmentSubjects.indexOf('Thermo-Fluids')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['Vibrations'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Vibrations') } else {
        var i = this.departmentSubjects.indexOf('Vibrations')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['SystemDynamics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('System Dynamics') } else {
        var i = this.departmentSubjects.indexOf('System Dynamics')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['ThermalDesign'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Thermal Design') } else {
        var i = this.departmentSubjects.indexOf('Thermal Design')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['VehicleDynamics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Vehicle Dynamics') } else {
        var i = this.departmentSubjects.indexOf('Vehicle Dynamics')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['TurboMachinery'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Turbo Machinery') } else {
        var i = this.departmentSubjects.indexOf('Turbo Machinery')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['AdvanceMachineDesign'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Advance Machine Design') } else {
        var i = this.departmentSubjects.indexOf('Advance Machine Design')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['ComputationalFluidDynamics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Computational Fluid Dynamics') } else {
        var i = this.departmentSubjects.indexOf('Computational Fluid Dynamics')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['EngineeringFundamental'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Engineering Fundamental') } else {
        var i = this.departmentSubjects.indexOf('Engineering Fundamental')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['AppliedFluidMechanics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Applied Fluid Mechanics') } else {
        var i = this.departmentSubjects.indexOf('Applied Fluid Mechanics')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['CompressibleFluidFlowGasDynamics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Compressible Fluid Flow / Gas Dynamics') } else {
        var i = this.departmentSubjects.indexOf('Compressible Fluid Flow / Gas Dynamics')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['IntroductiontoMechanicalEngineering'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Introduction to Mechanical Engineering') } else {
        var i = this.departmentSubjects.indexOf('Introduction to Mechanical Engineering')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['AppliedHeatTransfer'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Applied Heat Transfer') } else {
        var i = this.departmentSubjects.indexOf('Applied Heat Transfer')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['CompositeMaterial'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Composite Material') } else {
        var i = this.departmentSubjects.indexOf('Composite Material')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['IndustrialEngineering'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Industrial Engineering') } else {
        var i = this.departmentSubjects.indexOf('Industrial Engineering')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['AppliedThermodynamics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Applied Thermodynamics') } else {
        var i = this.departmentSubjects.indexOf('Applied Thermodynamics')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['mehanicalRobotics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Robotics') } else {
        var i = this.departmentSubjects.indexOf('Robotics')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['mehanicalElectroMechanicalSystem'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Electro Mechanical System') } else {
        var i = this.departmentSubjects.indexOf('Electro Mechanical System')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['FiniteElementAnalysis'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Finite Element Analysis') } else {
        var i = this.departmentSubjects.indexOf('Finite Element Analysis')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['mehanicalMechatronics'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Mechatronics') } else {
        var i = this.departmentSubjects.indexOf('Mechatronics')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
    this.tutorDetailsForm.controls['InternalCombustionEngine'].valueChanges.subscribe(data => {
      if (data == true) { this.departmentSubjects.push('Internal Combustion (IC) Engine') } else {
        var i = this.departmentSubjects.indexOf('Internal Combustion (IC) Engine')
        this.departmentSubjects.splice(i, 1);
      } console.log(this.departmentSubjects);
    });
  }

  ngOnInit() {
    console.log(this.afAuth.user);
  }

  onFormSubmit() {

    this.mathsSubjectsString = this.mathsSubjects.join(', ');
    this.departmentSubjectsString = this.departmentSubjects.join(', ');
    this.OtherSubjectsString = this.OtherSubjects.join(', ');
    this.softwareSubjectsString = this.softwareSubjects.join(', ');
    
    this.tutor.firstName = this.tutorDetailsForm.controls['firstName'].value;
    this.tutor.lastName = this.tutorDetailsForm.controls['lastName'].value;
    this.tutor.gender = this.tutorDetailsForm.controls['gender'].value;
    this.tutor.emailId = this.tutorDetailsForm.controls['emailId'].value;
    this.tutor.mobileNumber = this.tutorDetailsForm.controls['phoneNumber'].value;
    this.tutor.whatsappNumber = this.tutorDetailsForm.controls['whatsappNumber'].value;
    this.tutor.collegeName = this.tutorDetailsForm.controls['collegeName'].value;
    this.tutor.degree = this.tutorDetailsForm.controls['degree'].value;
    this.tutor.department = this.tutorDetailsForm.controls['departmentOfStudy'].value;
    this.tutor.currentSemester = this.tutorDetailsForm.controls['currentSemester'].value;
    this.tutor.yearOfPassing = this.tutorDetailsForm.controls['yearOfPassing'].value;
    this.tutor.cgpa = this.tutorDetailsForm.controls['cgpa'].value;
    this.tutor.whyDoYouWantToJoin = this.tutorDetailsForm.controls['whyEduFeat'].value;
    this.tutor.experience = this.tutorDetailsForm.controls['experience'].value;
    this.tutor.query = this.tutorDetailsForm.controls['query'].value;

this.service.addTutor(this.tutor).then(data=>{
  console.log(data);
})

  }

  sendCV() {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=teamedufeat@gmail.com', '_blank')
  }

  differentWhatsapp() {
    this.differentWhatsappNumber = true;
  }

  copyPhoneNumber() {
    this.tutorDetailsForm.controls['whatsappNumber'].setValue(this.tutorDetailsForm.controls['phoneNumber'].value);
  }

}
