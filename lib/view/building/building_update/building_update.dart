import 'dart:io';

import 'package:assure_apps/configs/ghaps.dart';
import 'package:flutter/material.dart';
import 'package:get/get.dart';
import 'package:go_router/go_router.dart';
import 'package:hugeicons/hugeicons.dart';

import '../../../configs/app_colors.dart';
import '../../../configs/app_constants.dart';
import '../../../configs/app_image.dart';
import '../../../configs/defaults.dart';
import '../../../model/buliding_model.dart';
import '../../../responsive.dart';
import '../../../widgets/app_text_field.dart';

class BuildingUpdate extends StatefulWidget {
  BuildingUpdate({super.key, this.model});

  BuildingModel? model;

  @override
  State<BuildingUpdate> createState() => _BuildingUpdateState();
}

class _BuildingUpdateState extends State<BuildingUpdate> {
  @override
  void initState() {
    if (widget.model != null) {
      buildingController.prospectNameController.text =
          widget.model?.prospectName.toString() ?? "";
      buildingController.projectNameController.text =
          widget.model?.projectName.toString() ?? "";
      buildingController.projectAddressController.text =
          widget.model?.projectAddress.toString() ?? "";
      buildingController.floorNoController.text =
          widget.model?.floorNo.toString() ?? "";
      buildingController.appointmentSizeController.text =
          widget.model?.appointmentSize.toString() ?? "";
      buildingController.perSftPriceController.text =
          widget.model?.perSftPrice.toString() ?? "";
      buildingController.totalUnitPriceController.text =
          widget.model?.totalUnitPrice.toString() ?? "";
      buildingController.carParkingController.text =
          widget.model?.carParking.toString() ?? "";
      buildingController.unitCostController.text =
          widget.model?.unitCost.toString() ?? "";
      buildingController.totalCostController.text =
          widget.model?.totalCost.toString() ?? "";
      buildingController.imageUrl = widget.model?.image.toString() ?? "";
    }
    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.bg,
      body: Form(
        key: buildingController.formKey,
        child: Column(
          children: [
            Container(
              padding: const EdgeInsets.symmetric(
                  horizontal: AppDefaults.padding,
                  vertical: AppDefaults.padding),
              color: AppColors.bgSecondayLight,
              child: SafeArea(
                bottom: false,
                child: Row(
                  children: [
                    IconButton(
                        onPressed: () {
                          context.go('/buildingView');
                          // context.go('/entry-point');
                        },
                        icon: const HugeIcon(
                          icon: HugeIcons.strokeRoundedArrowLeft02,
                          color: Colors.black,
                          size: 24.0,
                        )),
                    const Padding(
                      padding:
                          EdgeInsets.symmetric(horizontal: AppDefaults.padding),
                      child: Text(
                        "Building Update",
                        style: TextStyle(
                            fontSize: 20, color: AppColors.textColorb1),
                      ),
                    ),
                    Expanded(
                      flex: 2,
                      child: Row(
                        mainAxisAlignment: MainAxisAlignment.end,
                        children: [
                          if (!Responsive.isMobile(context)) gapW16,
                          if (!Responsive.isMobile(context))
                            IconButton(
                              onPressed: () {},
                              icon: const Badge(
                                  isLabelVisible: true,
                                  child: HugeIcon(
                                    icon: HugeIcons
                                        .strokeRoundedNotificationBlock02,
                                    color: Colors.black,
                                    size: 24.0,
                                  )),
                            ),
                          if (!Responsive.isMobile(context)) gapW16,
                          if (!Responsive.isMobile(context))
                            IconButton(
                              onPressed: () {},
                              icon: const CircleAvatar(
                                backgroundImage: NetworkImage(
                                    "https://cdn.create.vista.com/api/media/small/339818716/stock-photo-doubtful-hispanic-man-looking-with-disbelief-expression"),
                              ),
                            ),
                          gapW16,
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
            Container(
              decoration: BoxDecoration(
                  color: AppColors.white,
                  borderRadius: BorderRadius.circular(8)),
              padding: EdgeInsets.symmetric(
                vertical: AppDefaults.padding *
                    (Responsive.isMobile(context) ? 1 : 0.5),
                horizontal: AppDefaults.padding *
                    (Responsive.isMobile(context) ? 1 : 2.5),
              ),
              margin: EdgeInsets.symmetric(
                // vertical:
                //     AppDefaults.padding * (Responsive.isMobile(context) ? 1 : 1.5),
                horizontal: AppDefaults.padding *
                    (Responsive.isMobile(context) ? 1 : 6.5),
              ),
              child: Column(
                children: [
                  Row(
                    children: [
                      Expanded(
                        child: AppTextField(
                          textInputAction: TextInputAction.next,
                          labelText: "Prospect's Name",
                          hintText: "Enter Your Prospect's Name",
                          keyboardType: TextInputType.text,
                          controller: buildingController.prospectNameController,
                          labelColor: AppColors.textColorb1,
                          isBoldLabel: true,
                          hintColor: AppColors.grey,
                          textColor: AppColors.textColorb1,
                          isRequired: true,
                          validator: (value) {
                            if (value!.isEmpty) {
                              return "Please enter your first name";
                            }
                            return null;
                          },
                          onChanged: (p0) {
                            //  searchFlightBloc.firstName = p0;
                          },
                        ),
                      ),
                      gapW8,
                      Expanded(
                        child: AppTextField(
                          textInputAction: TextInputAction.next,
                          labelText: "Project Name",
                          hintText: "Enter Your Project Name",
                          keyboardType: TextInputType.text,
                          controller: buildingController.projectNameController,
                          labelColor: AppColors.textColorb1,
                          isBoldLabel: true,
                          hintColor: AppColors.grey,
                          textColor: AppColors.textColorb1,
                          isRequired: true,
                          validator: (value) {
                            if (value!.isEmpty) {
                              return "Please enter your last name";
                            }
                            return null;
                          },
                          onChanged: (p0) {},
                        ),
                      ),
                    ],
                  ),
                  gapH16,
                  Row(
                    children: [
                      Expanded(
                        child: AppTextField(
                          textInputAction: TextInputAction.next,
                          labelText: "Project Address",
                          hintText: "Enter Your Project Address",
                          keyboardType: TextInputType.name,
                          controller:
                              buildingController.projectAddressController,
                          labelColor: AppColors.textColorb1,
                          isBoldLabel: true,
                          hintColor: AppColors.grey,
                          textColor: AppColors.textColorb1,
                          isRequired: true,
                          validator: (value) {
                            if (value!.isEmpty) {
                              return "Please enter your project address";
                            }
                            return null;
                          },
                          onChanged: (p0) {
                            //  searchFlightBloc.firstName = p0;
                          },
                        ),
                      ),
                      gapW8,
                      Expanded(
                        child: AppTextField(
                          textInputAction: TextInputAction.next,
                          labelText: "Floor No",
                          hintText: "Enter Your Floor No",
                          keyboardType: TextInputType.text,
                          controller: buildingController.floorNoController,
                          labelColor: AppColors.textColorb1,
                          isBoldLabel: true,
                          hintColor: AppColors.grey,
                          textColor: AppColors.textColorb1,
                          isRequired: true,
                          validator: (value) {
                            if (value!.isEmpty) {
                              return "Please enter your floor no";
                            }
                            return null;
                          },
                          onChanged: (p0) {},
                        ),
                      ),
                    ],
                  ),
                  gapH16,
                  Row(
                    children: [
                      Expanded(
                        child: AppTextField(
                          textInputAction: TextInputAction.next,
                          labelText: "Appointment Size",
                          hintText: "Enter Your Appointment Size",
                          keyboardType: TextInputType.number,
                          controller:
                              buildingController.appointmentSizeController,
                          labelColor: AppColors.textColorb1,
                          isBoldLabel: true,
                          hintColor: AppColors.grey,
                          textColor: AppColors.textColorb1,
                          isRequired: true,
                          validator: (value) {
                            if (value!.isEmpty) {
                              return "Please enter your appointment size";
                            }
                            return null;
                          },
                          onChanged: (p0) {
                            //  searchFlightBloc.firstName = p0;
                          },
                        ),
                      ),
                      gapW8,
                      Expanded(
                        child: AppTextField(
                          textInputAction: TextInputAction.next,
                          labelText: "Per sft. Price",
                          hintText: "Enter Your Per sft. Price",
                          keyboardType: TextInputType.number,
                          controller: buildingController.perSftPriceController,
                          labelColor: AppColors.textColorb1,
                          isBoldLabel: true,
                          hintColor: AppColors.grey,
                          textColor: AppColors.textColorb1,
                          isRequired: true,
                          validator: (value) {
                            if (value!.isEmpty) {
                              return "Please enter floor Per sft. Price";
                            }
                            return null;
                          },
                          onChanged: (p0) {},
                        ),
                      ),
                    ],
                  ),
                  gapH16,
                  Row(
                    children: [
                      Expanded(
                        child: AppTextField(
                          textInputAction: TextInputAction.next,
                          labelText: "Total Units Price",
                          hintText: "0.00",
                          keyboardType: TextInputType.number,
                          readOnly: true,
                          controller:
                              buildingController.totalUnitPriceController,
                          labelColor: AppColors.textColorb1,
                          isBoldLabel: true,
                          hintColor: AppColors.grey,
                          textColor: AppColors.textColorb1,
                          isRequired: true,
                          // validator: (value) {
                          //   if (value!.isEmpty) {
                          //     return "Please enter your total Units Price";
                          //   }
                          //   return null;
                          // },
                          onChanged: (p0) {
                            buildingController.updateTotalUnitPrice();

                            //  searchFlightBloc.firstName = p0;
                          },
                        ),
                      ),
                      gapW8,
                      Expanded(
                        child: AppTextField(
                          textInputAction: TextInputAction.next,
                          labelText: "Car Parking",
                          hintText: "Enter Your Car Parking",
                          keyboardType: TextInputType.number,
                          // Numeric keyboard
                          controller: buildingController.carParkingController,
                          labelColor: AppColors.textColorb1,
                          isBoldLabel: true,
                          hintColor: AppColors.grey,
                          textColor: AppColors.textColorb1,
                          isRequired: false,
                          // validator: (value) {
                          //   // Validate to ensure the input is not empty and is a valid number
                          //
                          //   return null; // Input is valid
                          // },
                          onChanged: (value) {
                            if (double.tryParse(value!) == null) {
                              // return "Please enter a valid number";
                            }
                            // Update total cost whenever the input changes
                            buildingController.updateTotalCost();
                          },
                        ),
                      ),
                    ],
                  ),
                  gapH16,
                  Row(
                    children: [
                      Expanded(
                        child: AppTextField(
                          textInputAction: TextInputAction.next,
                          labelText: "Unit Cost",
                          hintText: "Enter Your Unit Cost",
                          keyboardType: TextInputType.number,
                          controller: buildingController.unitCostController,
                          labelColor: AppColors.textColorb1,
                          isBoldLabel: true,
                          hintColor: AppColors.grey,
                          textColor: AppColors.textColorb1,
                          isRequired: false,
                          // validator: (value) {
                          //   if (value!.isEmpty) {
                          //     return "Please enter your project address";
                          //   }
                          //   return null;
                          // },
                          onChanged: (p0) {
                            buildingController.updateTotalCost();
                          },
                        ),
                      ),
                      gapW8,
                      Expanded(
                        child: AppTextField(
                          textInputAction: TextInputAction.done,
                          labelText: "Total Cost",
                          hintText: "0.00",
                          readOnly: true,
                          keyboardType: TextInputType.name,
                          controller: buildingController.totalCostController,
                          labelColor: AppColors.textColorb1,
                          isBoldLabel: true,
                          hintColor: AppColors.grey,
                          textColor: AppColors.textColorb1,
                          isRequired: true,
                          // validator: (value) {
                          //   if (value!.isEmpty) {
                          //     return "Please enter your floor no";
                          //   }
                          //   return null;
                          // },
                          onChanged: (p0) {
                            buildingController.updateTotalCost();
                          },
                        ),
                      ),
                    ],
                  ),
                  gapH24,
                  formInfo("Upload image"),
                  Obx(
                    () => Align(
                      alignment: Alignment.center,
                      child: InkWell(
                          onTap: () async {
                            final res = await showDialog(
                              context: context,
                              builder: (context) => AlertDialog(
                                shape: OutlineInputBorder(
                                  borderRadius: BorderRadius.circular(8.0),
                                ),
                                actionsPadding: const EdgeInsets.all(16.0),
                                alignment: Alignment.center,
                                title: const Text(
                                  "Choose Option",
                                  textAlign: TextAlign.center,
                                  style: TextStyle(
                                    fontSize: 16.0,
                                    fontWeight: FontWeight.w700,
                                  ),
                                ),
                                content: Column(
                                  crossAxisAlignment: CrossAxisAlignment.center,
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    ElevatedButton(
                                      child: const Text("From Gallery"),
                                      onPressed: () {
                                        Navigator.pop(context, true);
                                      },
                                    ),
                                    const SizedBox(height: 10.0),
                                    ElevatedButton(
                                      child: const Text("Take Photo"),
                                      onPressed: () {
                                        Navigator.pop(context, false);
                                      },
                                    ),
                                  ],
                                ),
                              ),
                            );
                            if (res != null) {
                              await imageController.pickImage(fromGallery: res);
                            } else {
                              // Get.snackbar(
                              //     '', 'Select an option to continue');
                            }
                          },
                          child: Stack(
                            alignment: Alignment.bottomRight,
                            children: [
                              ClipRRect(
                                borderRadius: BorderRadius.circular(10),
                                // Adjust the radius as needed
                                child: imageController
                                        .resizedImagePath.value.isNotEmpty
                                    ? Container(
                                        width: 70.0,
                                        height: 70.0,
                                        decoration: BoxDecoration(
                                          image: DecorationImage(
                                            image: FileImage(File(
                                                imageController
                                                    .originalImagePath.value)),
                                            fit: BoxFit.cover,
                                          ),
                                        ),
                                      )
                                    : buildingController.imageUrl != ""
                                        ? Image.network(
                                            buildingController.imageUrl
                                                .toString(),
                                            width: 70.0,
                                            height: 70.0,
                                            fit: BoxFit.cover,
                                          )
                                        : Image.asset(
                                            AppImage.noBuilding,
                                            width: 70.0,
                                            height: 70.0,
                                            fit: BoxFit.cover,
                                          ),
                              ),
                              const Positioned(
                                right: 4,
                                child: Icon(
                                  Icons.camera_alt_outlined,
                                  size: 18.0,
                                  color: Colors.blue,
                                ),
                              ),
                            ],
                          )),
                    ),
                  ),
                  gapH24,
                  OutlinedButton(
                      style: OutlinedButton.styleFrom(
                        side: const BorderSide(width: 1.0, color: Colors.blue),
                      ),
                      onPressed: () {
                        if (buildingController.formKey.currentState!
                            .validate()) {
                          buildingController.updateProject(
                              BuildingModel(
                                id: widget.model!.id.toString(),
                                prospectName: buildingController
                                    .prospectNameController.text,
                                projectName: buildingController
                                    .projectNameController.text,
                                projectAddress: buildingController
                                    .projectAddressController.text,
                                floorNo:
                                    buildingController.floorNoController.text,
                                appointmentSize: buildingController
                                    .appointmentSizeController.text,
                                perSftPrice: int.parse(buildingController
                                    .perSftPriceController.text),
                                totalUnitPrice: double.parse(buildingController
                                    .totalUnitPriceController.text),
                                carParking: double.parse(buildingController
                                    .carParkingController.text),
                                unitCost: buildingController
                                        .unitCostController.text.isNotEmpty
                                    ? double.tryParse(buildingController
                                            .unitCostController.text) ??
                                        0.0
                                    : 0.0,
                                totalCost: double.parse(buildingController
                                    .totalCostController.text),
                              ),
                              imageController.resizedImagePath.value,
                              context);
                        }
                      },
                      child: const Text("Update Building"))
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
