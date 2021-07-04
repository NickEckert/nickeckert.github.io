---
layout: post
title:  "Advanced Encryption Standard"
date:   2021-03-15 01:01:01 -0600
tags: [algorithm, encryption, security]
published: false
---

The Advanced Encryption Standard (AES) is the worlds most known and widley used symmetric encryption algorithm. The algorithm itself is actually called Rijndael named after the two Belgian cryptographers that created it. It was selected from a pool of potential algorithms during the NIST AES selection process in the late 90s.

The predicesor to AES was the Data Encryption Standard (DES) which had a relatively small key size 
subjecting it to brute force attacks. An altered form of DES called Tripple DES was used to address this problem but ultimatly proved too slow when implemented in software and limited resource hardware.

I'm going to walk through an implementation of AES to show how it works and provide insight on how your data is encrypted on a daily basis.


# Implementation




# Validation


[AES Wiki]: https://en.wikipedia.org/wiki/Advanced_Encryption_Standard
[AES Paper]: https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.197.pdf
[AES Validation]: https://csrc.nist.gov/CSRC/media/Projects/Cryptographic-Algorithm-Validation-Program/documents/aes/AESAVS.pdf
