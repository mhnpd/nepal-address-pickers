
The `SelectDistrict` component enables users to effortlessly choose a district from a dropdown/select input. It is well-suited for a wide range of applications, offering the flexibility to handle various languages and provinces seamlessly.

&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;

### Example Usages

#### 1. Select District in English

```jsx
<SelectDistrict
  placeholder="Select a district"
  onChange={option=>console.log(option)}
/>
```

#### 2. Select District in Nepali

```jsx
<SelectDistrict
  lang="np"
  placeholder="Select a district"
  onChange={option=>console.log(option)}
/>
```

#### 3. Limiting District Selection to a Specific Province

```jsx
<SelectDistrict
  lang="np"
  placeholder="Select a district"
  onChange={option=>console.log(option)}
  province="Gandaki"
/>

<br/>
<br/>

<SelectDistrict
  lang="en"
  placeholder="Select a district"
  onChange={option=>console.log(option)}
  province="Gandaki"
/>
```

&nbsp;
&nbsp;
&nbsp;
&nbsp;


### Notes

- The `SelectDistrict` component leverages the `react-select` library for its functionality.
- For further customization and styling options, you can refer to the official documentation of the `react-select` library.

---

Feel free to tailor this documentation to your specific use case and audience. This enhanced documentation provides a comprehensive understanding of how to effectively utilize the `SelectDistrict` component within different scenarios.



&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
