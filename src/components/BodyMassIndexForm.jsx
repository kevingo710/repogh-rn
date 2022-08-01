const BodyMassIndexForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="mass" placeholder="Weight (kg)" />
      <FormikTextInput name="height" placeholder="Height (m)" />
      <TouchableWithoutFeedback onPress={onSubmit}>
        <Text>Calculate</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};
