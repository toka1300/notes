class Sloth
  include Comparable
  attr :speed

  # def initialize(name)
  #   @name = name
  # end

  # def <=>(other)
  #   name.size <=> other.name.size
  # end

  def initialize(speed)
    @speed = speed
  end

  def <=>(other)
    speed <=> other.speed
  end
end
