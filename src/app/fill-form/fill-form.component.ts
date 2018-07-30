import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Tutor } from '../../models/tutor';

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

  tutor: Tutor;

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

  constructor(public afAuth: AngularFireAuth, private fb: FormBuilder) {
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
  }

  ngOnInit() {
    console.log(this.afAuth.user);
  }

  onFormSubmit() {
    console.log('ho gya');
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
