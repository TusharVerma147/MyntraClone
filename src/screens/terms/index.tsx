import {  Text, Platform, ScrollView } from 'react-native'
import React from 'react'
import AppHeader from '../../components/appHeader'
import AppWrapper from '../../components/appWrapper'
import { Icons } from '../../assets'
import { vh } from '../../theme/dimensions'
import { colors } from '../../theme'
import styles from './styles'



const Terms = () => {
  return (
    <AppWrapper>
        <AppHeader
        backicon={Icons.back}
        backColor={colors.charcol}
        backHeight={vh(18)}
        backWidth={vh(18)}
        marginLeft={vh(10)}
        title="Terms of use"
        titleSize={vh(15)}
        titleColor={colors.charcol}
        backgroundColor={Platform.OS === 'android' ? colors.screengrey : 'none'}
      />

      <ScrollView style={styles.subcont} > 
        <Text style={styles.terms}>MYNTRA: TERMS OF USE</Text>
        <Text style={styles.termsText}>Welcome to Myntra. This document is an electronic record in terms of Information Technology Act, 2000 and published in accordance with the provisions of Rule 3) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, privacy policy and Terms of Use for access or usage of Myntra marketplace platform (hereinafter referred to as "Platform")</Text>
        <Text style={styles.termsText}>The Platform is owned by Myntra Designs Private Limited, having its registered office at Buildings Alyssa, Begonia and Clover situated in Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Varthur Hobli, Bengaluru - 560103, India and its branch office at Plot 82 A - 2nd and 3rd Floor, Sector 18 Gurugram Haryana, India.</Text>
        <Text style={styles.termsText}>Your use of the Myntra and services and tools are governed by the following terms and conditions ("Terms of Use") as applicable to the Myntra including the applicable policies which are incorporated herein by way of reference. By mere use of the Myntra, You shall be contracting with Myntra Designs Private Limited, the owner of the Platform. These terms and conditions including the policies constitute Your binding obligations, with Myntra.</Text>
        <Text style={styles.termsText}>For the purpose of these Terms of Use, wherever the context so requires "You" or "User" shall mean any natural or legal person who has agreed to become a buyer on Platform by providing data while registering on the Platform as Registered User. The term "Myntra","We","Us","Our" shall mean Myntra Designs Private Limited and its affiliates.</Text>
        <Text style={styles.termsText}>When You use any of the services provided by Us through the Platform, including but not limited to, (e.g. Product Reviews, Seller Reviews), You will be subject to the rules, guidelines, policies, terms, and conditions applicable to such service, and they shall be deemed to be incorporated into this Terms of Use and shall be considered as part and parcel of this Terms of Use. We reserve the right, at Our sole discretion, to change, modify, add or remove portions of these Terms of Use, at any time without any prior written notice to You. You shall ensure to review these Terms of Use periodically for updates/changes. Your continued use of the Platform following the posting of changes will mean that You accept and agree to the revisions. As long as You comply with these Terms of Use, We grant You a personal, non-exclusive, non-transferable, limited privilege to enter and use the Platform. By impliedly or expressly accepting these Terms of Use, You also accept and agree to be bound by Myntra Policies including but not limited to Privacy Policy as amended from time to time.</Text>

      </ScrollView>
    </AppWrapper>
  )
}

export default Terms