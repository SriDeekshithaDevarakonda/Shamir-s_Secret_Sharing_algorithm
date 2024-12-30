# Shamir-s_Secret_Sharing_algorithm
Problem Overview
This project implements a simplified version of Shamir's Secret Sharing algorithm to calculate the constant term 
𝑐
c of a polynomial, given a set of polynomial roots. The roots are provided in a specific format with different base systems for the encoded values. The goal is to decode these values, apply Lagrange interpolation, and compute the constant term of the polynomial.

Problem Description
Given a set of 
𝑛
n roots of a polynomial, where each root is encoded in a specific base, you are required to decode these values and calculate the constant term 
𝑐
c using polynomial interpolation methods. The task involves:

Reading and parsing the input test cases in JSON format.
Decoding the Y values based on the specified base for each root.
Solving for the constant term 
𝑐 
c of the polynomial using the decoded values.
