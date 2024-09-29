import 'package:flutter/material.dart';
import 'package:intl/intl.dart';
import '../configs/app_colors.dart';

class CustomDateRange extends StatelessWidget {
  final String label;
  final DateTime? date;
  final VoidCallback onTap;

  const CustomDateRange({
    super.key,
    required this.label,
    required this.date,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 10),
        decoration: BoxDecoration(
          color: date != null ? AppColors.primary.withOpacity(0.05) : Colors.grey[200],
          borderRadius: BorderRadius.circular(5),
          border: Border.all(color: const Color.fromARGB(24, 7, 51, 96), width: 0.5),
        ),
        child: Text(
          date != null ? DateFormat('yyyy-MM-dd').format(date!) : label,
          style: TextStyle(color: date != null ? AppColors.primary : Colors.grey),
        ),
      ),
    );
  }
}
